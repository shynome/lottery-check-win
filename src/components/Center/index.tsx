import Taro from '@tarojs/taro'
import { View } from "@tarojs/components";

export const Center = (props:{children:JSX.Element|JSX.Element[], className?:string })=>{
  return (
    <View className={`${props.className || ''} at-row at-row__align--center`}>
      <View className="at-col at-col__align--center">
        {props.children}
      </View>
    </View>
  )
}
