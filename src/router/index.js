import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import ResetPassword from '@/components/resetPassword'
import AMap from '@/components/map'
import Delivery from '@/components/delivery'
import Ucenter from '@/components/ucenter'
import OrderList from '@/components/orderList'
import OrderDetail from '@/components/orderDetail'
import PickUpCode from '@/components/pickUpCode'
import Scheduling from '@/components/scheduling'
import ChooseStore from '@/components/chooseStore'
import PersonalInfo from '@/components/personalInfo'
import BindWarehouse from '@/components/bindWarehouse'
import Setting from '@/components/setting'
import RevisePassword from '@/components/revisePassword'
import OnlineRecording from '@/components/onlineRecording'
import MyAccount from '@/components/myAccount'
import GetPail from '@/components/getPail'
import ReturnPailDetail from '@/components/returnPailDetail'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/resetPassword',
        name: 'ResetPassword',
        component: ResetPassword
    },
    {
        path: '/map',
        name: 'Map',
        component: AMap
    },
    {
        path: '/delivery',
        name: 'Delivery',
        component: Delivery
    },
    {
        path: '/ucenter',
        name: 'Ucenter',
        component: Ucenter
    },
    {
        path: '/order_list',
        name: 'OrderList',
        component: OrderList
    },
    {
        path: '/order_detail',
        name: 'OrderDetail',
        component: OrderDetail
    },
    {
        path: '/pick_up_code',
        name: 'PickUpCode',
        component: PickUpCode
    },
    {
        path: '/scheduling',
        name: 'Scheduling',
        component: Scheduling
    },
    {
        path: '/scheduling',
        name: 'Scheduling',
        component: Scheduling
    },
    {
        path: '/chooseStore',
        name: 'ChooseStore',
        component: ChooseStore
    },
    {
        path: '/personalInfo',
        name: 'PersonalInfo',
        component: PersonalInfo
    },
    {
        path: '/bindWarehouse',
        name: 'BindWarehouse',
        component: BindWarehouse
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting
    },
    {
        path: '/revisePassword',
        name: 'RevisePassword',
        component: RevisePassword
    },
    {
        path: '/onlineRecording',
        name: 'OnlineRecording',
        component: OnlineRecording
    },
    {
        path: '/myAccount',
        name: 'MyAccount',
        component: MyAccount
    },
    {
        path: '/getPail',
        name: 'GetPail',
        component: GetPail
    },
    {
        path: '/returnPailDetail',
        name: 'ReturnPailDetail',
        component: ReturnPailDetail
    }
]

export default new Router({
    routes
})
