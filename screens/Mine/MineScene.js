import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'

import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import {color, DetailCell, NavigationItem, SpacingView} from '../../widget'

type Props = {

}

type State = {
    isRefreshing: boolean,
}

class MineScene extends PureComponent<Props, State> {

    static navigationOptions = ({navigation}: any) => ({
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_set_white.png')}
                    onPress={() => {

                    }}
                />
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: {
            backgroundColor: color.primary,
            elevation: 0,
            borderBottomWidth: 0,
        },
        title: '我的',
    })

    state: {
        isRefreshing: boolean
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({isRefreshing: true})

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000)
    }

    renderCells() {
        let cells = []
        let dataList = this.getDataList()
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
                cells.push(cell)
            }
            cells.push(<SpacingView key={i} />)
        }

        return (
            <View style={{flex: 1}}>
                {cells}
            </View>
        )
    }

    userInfoScene = () => {
        this.props.navigation.navigate('Login')
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Image style={styles.avatar} source={require('../../img/mine/avatar.png')} />
                <TouchableOpacity onPress={this.userInfoScene}>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Heading2 style={{color: 'white'}}>素敌</Heading2>
                        <Image style={{marginLeft: 4}} source={require('../../img/mine/beauty_technician_v15.png')} />
                    </View>
                    <Paragraph style={{color: 'white', marginTop: 4}}>个人信息 ></Paragraph>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: color.paper}}>
                <View style={{position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.primary}} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        )
    }

    getDataList() {
        return (
            [
                [
                    {title: '我的简历', image: require('../../img/mine/mine_jianjie.png')},
                ],
                [
                    {title: '我的收藏', image: require('../../img/mine/mine_shoucang.png')},
                    {title: '我的订阅', image: require('../../img/mine/mine_dingyue.png')},
                    {title: '我的帖子', image: require('../../img/mine/mine_tiezi.png')},
                    {title: '我的邀约', image: require('../../img/mine/mine_yaoyue.png')},
                    {title: '福利专区', image: require('../../img/mine/mine_fuli.png')}
                ],
                // [
                //     {title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png')},
                //     {title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
                // ]
            ]
        )
    }

}


const styles = StyleSheet.create({
    icon: {
        width: 27,
        height: 27,
    },
    header: {
        backgroundColor: color.primary,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
})


export default MineScene
