import type { ExtractPropTypes } from 'vue'
export const messagePropes = {
  type: {
    type: String,
    default: 'info'
  },
  message: {
    type: String
  },
}

export type MessagePropes = ExtractPropTypes<typeof messagePropes>