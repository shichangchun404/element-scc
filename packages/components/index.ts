import components from "./components"

export { SccAlert } from './alert'
export { SccMessage } from './message'


export const install =(app)=> {
  components.forEach(comp => {
    app.component((comp as any).name, comp)
  })
}
export const version = '1.0.0'

export default {
  version,
  install,
}