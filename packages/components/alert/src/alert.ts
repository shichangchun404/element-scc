// 组件的属性
import type { ExtractPropTypes } from 'vue'
export const alertProps = {
  title: {
    type: String
  },
  message: {
    type: String
  }
}

export type AlertProps = ExtractPropTypes<typeof alertProps>