import Taro, { Component, Config } from '@tarojs/taro'
import {  View } from "@tarojs/components";
import { AtButton, AtForm, AtInput, AtTabs, AtTabsPane, } from "taro-ui";
import { BackLoginSwitch } from "./components/BackLoginSwitch";
import { Center } from "@/components/index";

import loginStyles from './login.styl'
import styles from './email.styl'

interface State {
  current: number
}

export default class EmailLogin extends Component<{},State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '邮箱登录',
  }

  state:State = {
    current: 0,
  }
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  renderSignUp(){
    return (
      <AtForm onSubmit={e=>e.preventDefault()}>
        <AtInput
          name='email' 
          type='email'
          title='邮箱'
          placeholder='邮箱地址'
          onChange={e=>e.toString()}
          />
        <AtInput 
          name='password' 
          type='password'
          title='密码'
          placeholder='密码'
          onChange={e=>e.toString()}
          />
        <AtInput 
          name='password' 
          type='password'
          title='确认密码'
          placeholder='输入上一次的密码'
          onChange={e=>e.toString()}
          />
        <AtButton className={styles.submit} disabled type='primary' formType='submit'>注册(暂未实现)</AtButton>
      </AtForm>
    )
  }

  renderSignIn(){
    return (
      <AtForm onSubmit={e=>e.preventDefault()}>
        <AtInput
          name='email' 
          type='email'
          title='邮箱'
          placeholder='邮箱地址'
          onChange={e=>e.toString()}
          />
        <AtInput 
          name='password' 
          type='password'
          title='密码'
          placeholder='你的密码'
          onChange={e=>e.toString()}
          />
        <AtButton className={styles.submit} disabled type='primary' formType='submit'>登录(暂未实现)</AtButton>
      </AtForm>
    )
  }
  
  static TabList = [ {title:"登录"}, { title:"注册" } ]
  
  render () {
    const { state } = this
    return (
      <View>
        <BackLoginSwitch/>
        <AtTabs current={state.current} tabList={EmailLogin.TabList} onClick={ e=>this.setState({ current: e }) }>
          <AtTabsPane current={state.current} index={0}>
            {this.renderSignIn()}
          </AtTabsPane>
          <AtTabsPane current={state.current} index={1}>
            {this.renderSignUp()}
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
