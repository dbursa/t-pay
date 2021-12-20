import PayMethod from './components/PayMethod.vue'
import PaymentInfo from './components/PaymentInfo.vue'
import Dropdown from './components/Dropdown.vue'

import Close from './components/icons/Close.vue'
import World from './components/icons/World.vue'
import Info from './components/icons/Info.vue'
import ArrowDown from './components/icons/ArrowDown.vue'
import ThePay from './components/icons/ThePay.vue'
import ApplePay from './components/icons/pay-methods/ApplePay.vue'
import GooglePay from './components/icons/pay-methods/GooglePay.vue'
import MasterCard from './components/icons/pay-methods/MasterCard.vue'
import Visa from './components/icons/pay-methods/Visa.vue'
import PlatimPak from './components/icons/pay-methods/PlatimPak.vue'
import CeskaSporitelna from './components/icons/pay-methods/CeskaSporitelna.vue'
import Csob from './components/icons/pay-methods/Csob.vue'
import Bitcoin from './components/icons/pay-methods/Bitcoin.vue'
import EquaBank from './components/icons/pay-methods/EquaBank.vue'
import Fio from './components/icons/pay-methods/Fio.vue'
import Kb from './components/icons/pay-methods/Kb.vue'
import MBank from './components/icons/pay-methods/MBank.vue'
import Moneta from './components/icons/pay-methods/Moneta.vue'
import PostovniSporitelna from './components/icons/pay-methods/PostovniSporitelna.vue'
import RaiffeinsenBank from './components/icons/pay-methods/RaiffeinsenBank.vue'
import OtherBank from './components/icons/pay-methods/OtherBank.vue'


Vue.component('pay-method', PayMethod)
Vue.component('payment-info', PaymentInfo)
Vue.component('dropdown', Dropdown)
Vue.component('close', Close)
Vue.component('world', World)
Vue.component('info', Info)
Vue.component('arrow-down', ArrowDown)
Vue.component('the-pay', ThePay)
Vue.component('apple-pay', ApplePay)
Vue.component('google-pay', GooglePay)
Vue.component('master-card', MasterCard)
Vue.component('visa', Visa)
Vue.component('platim-pak', PlatimPak)
Vue.component('ceska-sporitelna', CeskaSporitelna)
Vue.component('csob', Csob)
Vue.component('bitcoin', Bitcoin)
Vue.component('equa-bank', EquaBank)
Vue.component('fio', Fio)
Vue.component('kb', Kb)
Vue.component('m-bank', MBank)
Vue.component('moneta', Moneta)
Vue.component('postovni-sporitelna', PostovniSporitelna)
Vue.component('raiffeinsen-bank', RaiffeinsenBank)
Vue.component('other-bank', OtherBank)



import Vue from 'vue'
import App from './App.vue'
import '../public/css/styles.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')