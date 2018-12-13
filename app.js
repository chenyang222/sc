//app.js
import regeneratorRuntime from './libs/runtime'
import { Provider } from './libs/wechat-weapp-redux';
//Reducer
import { store } from './redux/index'

App(Provider(store)({
  globalData: {},
  async onLaunch () {}
}))