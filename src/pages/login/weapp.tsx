import Taro, { Component, Config } from '@tarojs/taro'
import {  View } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default class WeappLogin extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '微信小程序登录',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='root at-row at-row__align--center'>
        <View className="at-col at-col__align--center">
          <View className="btns">
            <AtButton>邮箱登录</AtButton>
            <AtButton onClick={ ()=>alert(55555) }>微信登录</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
