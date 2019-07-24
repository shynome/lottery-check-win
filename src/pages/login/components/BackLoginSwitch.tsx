import Taro from "@tarojs/taro";
import { Text, View } from "@tarojs/components";
import { AtFab } from "taro-ui";

import styles from "./BackLoginSwitch.styl";

export const BackLoginSwitch = ()=>{
  return (
    <View className={styles.main}>
      <AtFab onClick={ ()=>Taro.redirectTo({url:'/pages/login/login'}) }>
        <Text className='at-fab__icon at-icon at-icon-close'></Text>
      </AtFab>
    </View>
  )
}
export default BackLoginSwitch
