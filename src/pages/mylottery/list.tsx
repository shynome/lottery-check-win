import Taro, { Component, Config } from '@tarojs/taro'
import {  View, Text } from "@tarojs/components";
import { AtButton, AtFab, AtIcon } from "taro-ui";
import { BottomTab, Tabs } from "@/components/BottomTab";

import styles from './list.module.styl'

export default class MyLottery extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '登录',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(styles)
    return (
      <View >
        <AtButton onClick={()=>Taro.navigateTo({url:"./add"})}>添加购票</AtButton>
        <BottomTab current={Tabs.MyLottery}></BottomTab>
      </View>
    )
  }
}
