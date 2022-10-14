<template>
  <div>{{message}}</div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { messagePropes } from './message'
export default defineComponent({
  name: 'SccMessage',
  props: messagePropes,
  setup(props) {
    const message = computed(()=>{
      return props.message
    })
  },
})
</script>
