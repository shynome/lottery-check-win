import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Input, } from "@tarojs/components";
import { getDefaultLotteryCode } from "../index";

import { LotteryCode } from "@/common/lottery";

import styles from "./LotteryInput.module.styl";

const grepInput = (v: string): string => {
  v = v.slice(-2)
  return v
}

type Props = {
  onChange: (codes: LotteryCode) => void
  codes?: LotteryCode
}

export const LotteryInput = (props: Props) => {

  const [codes, setCodes] = useState<LotteryCode>(props.codes || getDefaultLotteryCode())

  return (
    <View className={`at-row at-row__justify--around ${styles.root}`}>
      {
        codes.map((code, index) => (
          <View className={'at-col'}>
            <Input
              key={index}
              className={[styles.cube, index < 5 ? styles.f5 : styles.l2].join(' ')}
              type='number'
              value={code}
              onInput={(e) => {
                let v = grepInput(e.detail.value)
                if (isNaN(Number(v))) {
                  return
                }
                let arr = [...codes] as LotteryCode
                arr[index] = v
                setCodes(arr)
                props.onChange(arr)
              }}
            />
          </View>
        ))
      }
    </View>
  )
}

