import Taro from "@tarojs/taro";
import { Text, View } from "@tarojs/components";
import { AtFab, AtIcon } from "taro-ui";

import styles from "./BackLoginSwitch.module.styl";

export const BackLoginSwitch = ()=>{
  return (
    <View className={styles.main}>
      <AtFab onClick={ ()=>Taro.redirectTo({url:'/pages/login/login'}) }>
        <AtIcon value={'close'}></AtIcon>
      </AtFab>
    </View>
  )
}
export default BackLoginSwitch
