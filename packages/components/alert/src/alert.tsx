import { defineComponent} from 'vue'

export default defineComponent({
  name: 'SccAlert',
  props:{},
  setup(){
    return ()=>{
      return <div class="scc-alert">alert</div>
    }
  }
})