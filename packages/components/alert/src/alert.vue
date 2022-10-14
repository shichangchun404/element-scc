<template>
  <div>
    <div>{{title}}</div>
    <p>{{message}}</p>
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

