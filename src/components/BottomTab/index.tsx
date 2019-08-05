import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

export enum Tabs {
  NoSelect = -1,
  Home = 0,
  MyLottery = 1,
  UserCenter = 2,
}

export const TabList = [
  { title: "首页", iconType: 'home', url: '/pages/index/index' },
  { title: "我的购票", iconType: 'bullet-list', url: '/pages/mylottery/list' },
  { title: "个人中心", iconType: 'user', url: '' },
]

const changeTab = (value: number) => {
  let url = TabList[value].url 
  url && Taro.redirectTo({ url })
}

export const BottomTab = (props: { current: Tabs }) => {
  return (
    <AtTabBar
      fixed
      tabList={TabList}
      current={props.current}
      onClick={changeTab}
    />
  )
}
