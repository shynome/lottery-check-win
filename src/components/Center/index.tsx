import Taro, { Component } from '@tarojs/taro'
import { View } from "@tarojs/components";
import styles from "./index.module.styl";

type Props = {
  className: string
}

export class Center extends Component<Props> {
  render(){
    return (
      <View className={`${styles.main} at-row at-row__align--center`}>
        <View className="at-col at-col__align--center">
          {this.props.children}
        </View>
      </View>
    )
  }
}
export default Center
