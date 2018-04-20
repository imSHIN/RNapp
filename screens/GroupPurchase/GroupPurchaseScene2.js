import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, InteractionManager } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import { color, Button, NavigationItem, Separator, SpacingView, Line } from '../../widget'
import { screen, system } from '../../common'
import api, { recommendUrlWithId, groupPurchaseDetailWithId } from '../../api'
import GroupPurchaseCell from './GroupPurchaseCell'
import GroupButton from './component/GroupButton'
import { Title1, Heading1, Heading2, Heading3, Paragraph, DateParagraph } from '../../widget/Text'

class GroupPurchaseScene extends PureComponent {

  static navigationOptions = () => ({
    headerTitle: '详情',
    headerStyle: { backgroundColor: 'white' },
  })

  constructor() {
    super()

    this.state = {
      condition: ['100-121', '杭州', '不限', '7个月', '4天/周', '面议']
    }
  }

  render() {
    // let info = this.props.navigation.state.params.info
    return (
      <View>
        <ScrollView>
          <View style={styles.base}>
            <View >
              <Title1>工作标题</Title1>
            </View>
            <Line/>
            <View style={styles.condition}>
              {
                this.state.condition.map(
                  (index, i) => (
                    <View
                      key={i}
                      style={{ width: 100, flexDirection: 'row',}}>
                      <Ionicons
                        name={'md-time'}
                        style={{ marginRight: 3, marginLeft: 20 }}
                        color={'#777777'} />
                      <Paragraph>{index}</Paragraph>
                    </View>
                  )
                )
              }
            </View>
            <Line/>
            <View style={styles.companyArea}>
              <View>
                <Heading2 style={{marginBottom: 20}}>公司</Heading2>
                <Paragraph>计算机</Paragraph>
              </View>
              <Image style={styles.icon} />
            </View>
          </View>
          <SpacingView/>
          <View style={styles.base}>

          </View>
        </ScrollView>

        {/* <GroupButton></GroupButton> */}
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: screen.width,
    height: screen.width * 0.5
  },
  topContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buyButton: {
    backgroundColor: '#fc9e28',
    width: 94,
    height: 36,
    borderRadius: 7,
  },
  tagContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  tipHeader: {
    height: 35,
    justifyContent: 'center',
    borderWidth: screen.onePixel,
    borderColor: color.border,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: 'white'
  },
  // before -----
  base: {
    backgroundColor: 'white',
    padding: 20,
    borderWidth: screen.onePixel,
    borderColor: color.border,
  },
  condition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  companyArea: {
    flexDirection: 'row',
    // flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1
  },
})


export default GroupPurchaseScene
