import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'

import { Heading2, Heading3, Paragraph } from '../../widget/Text'
import { color, Button, NavigationItem, SpacingView, SeparatorRow } from '../../widget'

import { screen, system } from '../../common'
import api from '../../api'
import SearchBox from './search-box'

import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

type Props = {
  navigation: any,
}

type State = {
  discounts: Array<Object>,
  dataList: Array<Object>,
  refreshing: boolean,
}


class HomeScene extends PureComponent<Props, State> {

  static navigationOptions = ({ navigation }: any) => ({
    headerStyle: { backgroundColor: 'white' },
    
    headerTitle: (
      <SearchBox
        backgroundColor={'white'}
        titleCancelColor={'grey'}
        autoFocus={true}
        containerWidth={screen.width/5*4}
        marginLeft={60}/>
    ),
    // headerRight: (
    //     <NavigationItem
    //         icon={require('../../img/mine/icon_navigation_item_message_white.png')}
    //         onPress={() => {

    //         }}
    //     />
    // ),
    // headerLeft: (
    //   <NavigationItem
    //     title='杭州'
    //     titleStyle={{ color: 'white' }}
    //     onPress={() => {

    //     }}
    //   />
    // ),
  })

  constructor(props: Props) {
    super(props)

    this.state = {
      discounts: [],
      dataList: [],
      refreshing: false,
    }
  }

  componentDidMount() {
    this.requestData()

  }

  requestData = () => {
    this.setState({ refreshing: true })

    this.requestDiscount()
    this.requestRecommend()
  }

  requestRecommend = async () => {
    try {
      let response = await fetch(api.recommend)
      let json = await response.json()

      let dataList = json.data.map(
        (info) => {
          return {
            id: info.id,
            imageUrl: info.squareimgurl,
            title: info.mname,
            subtitle: `[${info.range}]${info.title}`,
            price: info.price
          }
        }
      )

      this.setState({
        dataList: dataList,
        refreshing: false,
      })
    } catch (error) {
      this.setState({ refreshing: false })
    }
  }

  requestDiscount = async () => {
    try {
      let response = await fetch(api.discount)
      let json = await response.json()
      this.setState({ discounts: json.data })
    } catch (error) {
      alert(error)
    }
  }

  renderCell = (info: Object) => {
    return (
      <GroupPurchaseCell
        info={info.item}
        onPress={this.onCellSelected}
      />
    )
  }

  onCellSelected = (info: Object) => {
    StatusBar.setBarStyle('default', false)
    this.props.navigation.navigate('GroupPurchase', { info: info })
  }

  keyExtractor = (item: Object, index: number) => {
    return item.id
  }

  renderHeader = () => {
    return (
      <View>

      </View>
    )
  }

  onMenuSelected = (index: number) => {
    alert(index)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <TouchableOpacity onpress={this.onCellSelected}>
            <Text>杭州</Text>
          </TouchableOpacity>
          <SeparatorRow/>
          <TouchableOpacity onpress={this.onCellSelected}>
            <Text>职位</Text>
          </TouchableOpacity>
          <SeparatorRow />
          <TouchableOpacity onpress={this.onCellSelected}>
            <Text>筛选</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.dataList}
          renderItem={this.renderCell}

          keyExtractor={this.keyExtractor}
          onRefresh={this.requestData}
          refreshing={this.state.refreshing}

          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.paper
  },
  filter: {
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'space-around', 
    alignItems: 'center',
    flexDirection: 'row',   
    borderWidth: screen.onePixel,
    borderColor: color.border,
  }
})


export default HomeScene
