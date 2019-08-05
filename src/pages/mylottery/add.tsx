import Taro, { Component, Config } from '@tarojs/taro'
import { View } from "@tarojs/components";
import { AtButton, AtForm, AtIcon, AtDivider } from "taro-ui";
import { BottomTab, Tabs } from "@/components/BottomTab";
import { LotteryInput } from "./components/LotteryInput";
import { LotteryCode } from "@/common/lottery";
import { getDefaultLotteryCode } from "./index";
import update from 'immutability-helper'

import styles from "./add.module.styl";

type State = {
  LotteryList: Item[]
}

type Item = { id: number, codes: LotteryCode }

let i = 0
const genItem = (codes = getDefaultLotteryCode()): Item => ({ id: i++, codes })

export default class MyLotteryAdd extends Component<{}, State> {

  state: State = {
    LotteryList: [
      genItem(),
    ]
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '添加购买的大乐透号码',
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  renderLotteryInput = ({ codes, id }: Item, index: number) => {
    return (
      <View key={id}>
        {index === 0 ? null : <AtDivider height={5} />}
        <View className={`at-row at-row__align--center ${styles.item}`}>
          <View className={'at-col'}>
            <LotteryInput codes={codes} onChange={(codes) => { console.log(codes) }}></LotteryInput>
          </View>
          <View className={`at-col at-col-1 at-col--auto ${styles['del-btn']}`} onClick={() => this.delLotteryCode(id)}>
            <AtIcon size={14} value='close'></AtIcon>
          </View>
        </View>
      </View>
    )
  }
  delLotteryCode = (id: number) => {
    let v = this.state.LotteryList
    let index = v.map(v => v.id).indexOf(id)
    this.setState({
      LotteryList: update(v, { $splice: [[index, 1]] })
    })
  }
  saveLotteryCode = (id: number, codes: LotteryCode) => {
    let v = [...this.state.LotteryList].filter(v => v.id === id)
    let item = v[0]
    item.codes
  }
  addLotteryCode = () => {
    let lotteryList = this.state.LotteryList
    this.setState({
      LotteryList: update(lotteryList, { $push: [genItem()] })
    })
  }

  render() {
    return (
      <View className={styles.root}>
        <View className={'at-article'}></View>
        <AtForm>
          {this.state.LotteryList.map(this.renderLotteryInput)}
          <AtButton onClick={this.addLotteryCode}>新增一注</AtButton>
        </AtForm>
      </View>
    )
  }
}
