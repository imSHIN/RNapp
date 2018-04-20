import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Heading2, Heading3, Paragraph, DateParagraph} from '../../widget/Text'
import {screen} from '../../common'
import {color} from '../../widget'

let count = 0

type Props = {
    info: Object,
    onPress: Function,
}


class GroupPurchaseCell extends PureComponent<Props> {

    render() {
        let {info} = this.props
        let imageUrl = info.imageUrl.replace('w.h', '160.0')
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
                <Image source={{uri: imageUrl}} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <View style={styles.containerTitle}>
                        <Heading2>{info.title}</Heading2>
                        <Paragraph>01-30</Paragraph>
                    </View>
                    
                    <Paragraph numberOfLines={0} >{info.subtitle}</Paragraph>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                        <Ionicons
                            name={'md-locate'}
                            style={{marginRight:3}}
                            color={'#777777'}/>
                        <Text style={styles.pariceText}>
                        上海
                        </Text>
                        <Ionicons
                            name={'md-time'}
                            style={{ marginRight: 3, marginLeft:20 }}
                            color={'#777777'}/>
                        <Text style={styles.pariceText}>5天/周</Text>
                        </View>
                        <Text style={styles.price}>
                            <FontAwesome
                                name={'rmb'}/>
                        {info.price}元
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 10,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerTitleDate: {

    },
    containerPrice: {
        
    },
    price: {
        color: 'red',
    },
    pariceText: {
        color: '#777777',
        fontSize: 13,
    }
})


export default GroupPurchaseCell
