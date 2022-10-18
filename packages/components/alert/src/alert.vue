<template>
  <div class="scc-alert">
    <div class="tilte">{{title}}</div>
    <p class="message">{{message}}</p>
    <div class="btn-wrap">
      <div class="btn btn-cancle">取消</div>
      <div class="btn btn-submit">确认</div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { alertProps } from './alert'
export default defineComponent({
  name: 'SccAlert',
  props: alertProps,
  setup(props) {
    const title = computed(()=>{
      return props.title
    })
    const message = computed(()=>{
      return props.message
    })
  },
})
</script>

