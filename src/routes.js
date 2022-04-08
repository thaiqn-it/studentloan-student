import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import KeyIcon from '@mui/icons-material/Key'
import SpaceShip from 'examples/Icons/SpaceShip'
import StudentProfile from 'pages/StudentProfile'
import Wallet from 'pages/Wallet'
import Report from 'pages/Report'
import EditLoanPost from 'pages/EditLoanPost'
import ViewPost from 'pages/ViewPost'
import ViewAllPost from 'pages/ViewAllPost'
import Verify from 'pages/Verify'
import TutorDetail from 'pages/TutorDetail'

import StudentProfile2 from 'pages/StudentProfile2'
import NotFound from 'pages/NotFound'

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
        key: 'viewall',
        route: '/loan/all',
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
        route: '/nguoi-giam-ho/:id',
        component: TutorDetail,
        key: 'tutordetail',
    },
    {
        route: '/loan/edit/:id',
        component: EditLoanPost,
        key: 'edit',
    },
    {
        route: '/loan/view/:id',
        component: ViewPost,
        key: 'view',
    },
    {
        route: '/404',
        component: NotFound,
        key: 'notfound',
    },
    {
        route: '/*',
        component: NotFound,
        key: 'notfound',
    },
    // {
    //     route: '/',
    //     component: Report, // for dashboard
    //     key: 'report',
    // },
]

routes.map((route) => {
    if (route.collapse)
        route.collapse.map(
            (route) => (route.route = '/dashboard' + route.route)
        )
    if (route.route) route.route = '/dashboard' + route.route
    return route
})

extraRoutes.map((route) => {
    route.route = '/dashboard' + route.route
})

export default routes
export { extraRoutes }
