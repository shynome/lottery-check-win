import Taro, { Component, Config } from '@tarojs/taro'
import {  View } from "@tarojs/components";
import { AtButton } from "taro-ui";

import styles from './login.module.styl'

import { Center } from "@/components/index";

export default class Login extends Component {

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
    return (
      <Center className={styles.root}>
        <View className={`${styles.btns} btns`}>
          <AtButton className={styles['at-button']} onClick={ ()=>Taro.redirectTo({ url: `/pages/login/email` }) }>邮箱登录</AtButton>
          <AtButton disabled className={styles['at-button']} onClick={ ()=>{return alert("暂未实现");Taro.redirectTo({ url: `/pages/login/${process.env.TARO_ENV==='weapp'?'weapp':'wechat'}` })} }>微信登录</AtButton>
        </View>
      </Center>
    )
  }
}
