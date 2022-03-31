/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from 'layouts/dashboard'
import Tables from 'layouts/tables'
import Billing from 'layouts/billing'
import VirtualReality from 'layouts/virtual-reality'
import RTL from 'layouts/rtl'
import Profile from 'layouts/profile'
import SignIn from 'layouts/authentication/sign-in'
import SignUp from 'layouts/authentication/sign-up'

// Soft UI Dashboard React icons
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import ListIcon from '@mui/icons-material/List'
import KeyIcon from '@mui/icons-material/Key'
import Shop from 'examples/Icons/Shop'
import Office from 'examples/Icons/Office'
import Settings from 'examples/Icons/Settings'
import Document from 'examples/Icons/Document'
import SpaceShip from 'examples/Icons/SpaceShip'
import CustomerSupport from 'examples/Icons/CustomerSupport'
import CreditCard from 'examples/Icons/CreditCard'
import Cube from 'examples/Icons/Cube'
import LandingPage from 'pages/LandingPage'
import StudentProfile from 'pages/StudentProfile'
import Wallet from 'pages/Wallet'
import Report from 'pages/Report'
import RequestLoanPost from 'pages/RequestLoanPost'
import ViewPost from 'pages/ViewPost'
import ViewAllPost from 'pages/ViewAllPost'
import Verify from 'pages/Verify'
import TutorDetail from 'pages/TutorDetail'

import StudentProfile2 from 'pages/StudentProfile2'

let routes = [
    {
        type: 'collapse',
        name: 'Thông tin v2',
        key: 'profile2',
        collapse: [
            {
                type: 'collapse',
                name: 'Thông tin',
                key: 'profile',
                route: '/profile2/profile',
                icon: <AssignmentIndIcon size="12px" />,
                component: StudentProfile,
                noCollapse: true,
            },
            {
                type: 'collapse',
                name: 'Ví',
                key: 'wallet',
                route: '/profile2/wallet',
                icon: <AccountBalanceWalletIcon size="12px" />,
                component: Wallet,
                noCollapse: true,
            },
        ],
    },

    {
        type: 'collapse',
        name: 'Báo cáo',
        key: 'report',
        route: '/report',
        icon: <ContentPasteIcon size="12px" />,
        component: Report,
        noCollapse: true,
    },
    // {
    //     type: 'collapse',
    //     name: 'Xem bài',
    //     key: 'view-post',
    //     route: '/view-post',
    //     icon: <ListIcon size="12px" />,
    //     component: ViewPost,
    //     noCollapse: true,
    // },
    {
        type: 'collapse',
        name: 'Xác Thực',
        key: 'verify',
        route: '/verify',
        icon: <KeyIcon size="12px" />,
        component: Verify,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Xem tất cả hồ sơ vay',
        key: 'view-all-post',
        route: '/view-all-post',
        icon: <SpaceShip size="12px" />,
        component: ViewAllPost,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Thông tin',
        key: 'profile2',
        route: '/profile2',
        icon: <SpaceShip size="12px" />,
        component: StudentProfile2,
        noCollapse: false,
    },
]

const extraRoutes = [
    {
        route: '/tutordetail',
        component: TutorDetail,
        key: 'tutordetail',
    },
    {
        route: '/request/:id',
        component: RequestLoanPost,
        key: 'request',
    },
    {
        route: '/view-post/:id',
        component: ViewPost,
        key: 'view-post',
    },
]

routes.map((route) => {
    if(route.collapse)
        route.collapse.map(route => route.route = '/dashboard' + route.route)
    if(route.route)
        route.route = '/dashboard' + route.route
    return route
})

extraRoutes.map((route) => {
    route.route = '/dashboard' + route.route
})

export default routes
export { extraRoutes }
