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
import AssignmentIcon from '@mui/icons-material/Assignment'

import StudentProfile2 from 'pages/StudentProfile2/v2'
import Main from 'pages/Main'
import NotFound from 'pages/NotFound'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

import ListIcon from '@mui/icons-material/List'
import Repayment from 'pages/Repayment'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
let routes = [
    {
        type: 'collapse',
        name: 'Trang chính',
        key: 'trang-chinh',
        route: '/trang-chinh',
        icon: <ContentPasteIcon size="12px" />,
        component: Main,
        noCollapse: true,
    },
    // {
    //     type: 'collapse',
    //     name: 'Thông tin v2',
    //     key: 'profile2',
    //     icon: <AssignmentIndIcon size="12px" />,
    //     collapse: [
    //         {
    //             type: 'collapse',
    //             name: 'Thông tin',
    //             key: 'profile',
    //             route: '/profile2/profile',
    //             icon: <AssignmentIndIcon size="12px" />,
    //             component: StudentProfile,
    //             noCollapse: true,
    //         },
    //         {
    //             type: 'collapse',
    //             name: 'Ví',
    //             key: 'wallet',
    //             route: '/profile2/wallet',
    //             icon: <AccountBalanceWalletIcon size="12px" />,
    //             component: Wallet,
    //             noCollapse: true,
    //         },
    //     ],
    // },

    // {
    //     type: 'collapse',
    //     name: 'Báo cáo',
    //     key: 'report',
    //     route: '/report',
    //     icon: <ContentPasteIcon size="12px" />,
    //     component: Report,
    //     noCollapse: true,
    // },
    // {
    //     type: 'collapse',
    //     name: 'Yêu cầu vay',
    //     key: 'request',
    //     route: '/request',
    //     icon: <LocalAtmIcon size="12px" />,
    //     component: RequestLoanPost,
    //     noCollapse: true,
    // },
    // {
    //     type: 'collapse',
    //     name: 'Xem bài',
    //     key: 'view-post',
    //     route: '/view-post',
    //     icon: <ListIcon size="12px" />,
    //     component: ViewPost,
    //     noCollapse: true,
    // },
    // {
    //     type: 'collapse',
    //     name: 'Xác Thực',
    //     key: 'xac-thuc',
    //     route: '/xac-thuc',
    //     icon: <KeyIcon size="12px" />,
    //     component: Verify,
    //     noCollapse: true,
    // },
    {
        type: 'collapse',
        name: 'Ví',
        key: 'vi',
        route: '/vi',
        icon: <AccountBalanceWalletIcon size="12px" />,
        component: Wallet,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Xem tất cả hồ sơ vay',
        key: 'tat-ca',
        route: '/ho-so/tat-ca',
        icon: <AssignmentIcon size="12px" />,
        component: ViewAllPost,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Thông tin',
        key: 'thong-tin',
        route: '/thong-tin',
        icon: <PermIdentityIcon size="12px" />,
        component: StudentProfile2,
        noCollapse: false,
    },
]

const extraRoutes = [
    {
        route: '/thanh-toan/:id',
        component: Repayment,
        key: 'thanh-toan',
    },
    {
        route: '/nguoi-giam-ho/:id',
        component: TutorDetail,
        key: 'nguoi-giam-ho',
    },
    {
        route: '/ho-so/chinh-sua/:id',
        component: EditLoanPost,
        key: 'chinh-sua',
    },
    {
        route: '/ho-so/xem/:id',
        component: ViewPost,
        key: 'xem',
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
            (route) => (route.route = '/trang-chu' + route.route)
        )
    if (route.route) route.route = '/trang-chu' + route.route
    return route
})

extraRoutes.map((route) => {
    route.route = '/trang-chu' + route.route
})

export default routes
export { extraRoutes }
