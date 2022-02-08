import PayMethod from './components/PayMethod.vue'
import PaymentInfo from './components/PaymentInfo.vue'
import PayWithCard from './components/PayWithCard.vue'
import PayOtherMethod from './components/PayOtherMethod.vue'
import PayWithInternetBanking from './components/PayWithInternetBanking.vue'
import Loading from './components/Loading.vue'
import WaitingForPayment from './components/WaitingForPayment.vue'
import PaymentFailed from './components/PaymentFailed.vue'


import Dropdown from './components/Dropdown.vue'
import ArrowDown from './components/icons/ArrowDown.vue'
import ArrowBack from './components/icons/ArrowBack.vue'
import Close from './components/icons/Close.vue'
import World from './components/icons/World.vue'
import Info from './components/icons/Info.vue'
import ThePay from './components/icons/ThePay.vue'
import Copy from './components/icons/Copy.vue'
import Email from './components/icons/Email.vue'
import Print from './components/icons/Print.vue'
import Save from './components/icons/Save.vue'
import ExternalLink from './components/icons/ExternalLink.vue'
import QuestionMarkRed from './components/icons/QuestionMarkRed.vue'

//desktop svg
import ArrowBackLg from './components/icons/desktop/ArrowBackLg.vue'
import CopyLg from './components/icons/desktop/CopyLg.vue'
import EmailLg from './components/icons/desktop/EmailLg.vue'
import PrintLg from './components/icons/desktop/PrintLg.vue'

import PaymentRefused from './components/icons/payment-process/PaymentRefused.vue'
import PaymentInProgress from './components/icons/payment-process/PaymentInProgress.vue'

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
import VisaHeader from './components/icons/pay-with-card/Visa.vue'
import MasterCardHeader from './components/icons/pay-with-card/MasterCard.vue'

//desktop svg
import VisaHeaderLg from './components/icons/pay-with-card/desktop/VisaLg.vue'
import MasterCardHeaderLg from './components/icons/pay-with-card/desktop/MasterCardLg.vue'


Vue.component('pay-method', PayMethod)
Vue.component('pay-with-card', PayWithCard)
Vue.component('payment-info', PaymentInfo)
Vue.component('pay-other-method', PayOtherMethod)
Vue.component('pay-with-internet-banking', PayWithInternetBanking)
Vue.component('loading', Loading)
Vue.component('waiting-for-payment', WaitingForPayment)
Vue.component('payment-failed', PaymentFailed)
Vue.component('dropdown', Dropdown)
Vue.component('close', Close)
Vue.component('world', World)
Vue.component('info', Info)
Vue.component('arrow-down', ArrowDown)
Vue.component('arrow-back', ArrowBack)
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
Vue.component('visa-header', VisaHeader)
Vue.component('master-card-header', MasterCardHeader)
Vue.component('copy', Copy)
Vue.component('email', Email)
Vue.component('print', Print)
Vue.component('save', Save)
Vue.component('external-link', ExternalLink)
Vue.component('payment-refused', PaymentRefused)
Vue.component('payment-in-progress', PaymentInProgress)
Vue.component('question-mark-red', QuestionMarkRed)


//desktop
Vue.component('visa-header-lg', VisaHeaderLg)
Vue.component('master-card-header-lg', MasterCardHeaderLg)
Vue.component('arrow-back-lg', ArrowBackLg)
Vue.component('copy-lg', CopyLg)
Vue.component('email-lg', EmailLg)
Vue.component('print-lg', PrintLg)


import Vue from 'vue'
import App from './App.vue'
import '../public/css/styles.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')