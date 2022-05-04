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
import SchoolIcon from '@mui/icons-material/School';
import ListIcon from '@mui/icons-material/List';

import StudentProfile2 from 'pages/StudentProfile2'
import Main from 'pages/Main'
import NotFound from 'pages/NotFound'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';

import Repayment from 'pages/Repayment'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import PasswordPage from 'pages/PasswordPage'
import PaymentTuition from 'pages/PaymentTuition'
let routes = [
    {
        type: 'collapse',
        name: 'Trang chính',
        key: 'main',
        route: '/main',
        icon: <DashboardIcon size="12px" />,
        component: Main,
        noCollapse: true,
    },

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
        name: 'Quản lý ví',
        key: 'vi',
        route: '/vi',
        icon: <AccountBalanceWalletIcon size="12px" />,
        component: Wallet,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Thông tin',
        key: 'thong-tin',
        route: '/thong-tin',
        icon: <AccountBoxIcon size="12px" />,
        component: StudentProfile2,
        noCollapse: false,
    },
    {
        type: 'collapse',
        name: 'Hồ sơ vay',
        key: 'ho-so-vay',
        icon: <AssignmentIcon size="12px" />,
        collapse: [
            {
                type: 'collapse',
                name: 'Tất cả',
                key: 'tat-ca',
                route: '/ho-so/tat-ca',
                icon: "menu",
                component: ViewAllPost,
                noCollapse: true,
            },
            {
                type: 'collapse',
                name: 'Đang chờ duyệt',
                key: 'dang-cho-duyet',
                route: '/ho-so/dang-cho-duyet',
                icon: "access_time",
                component: ViewAllPost,
                noCollapse: true,
            },
            {
                type: 'collapse',
                name: 'Đang kêu gọi',
                key: 'dang-keu-goi',
                route: '/ho-so/dang-keu-goi',
                icon: "monetization_on",
                component: ViewAllPost,
                noCollapse: true,
            },
            {
                type: 'collapse',
                name: 'Thành công',
                key: 'thanh-cong',
                route: '/ho-so/thanh-cong',
                icon: "check_circle",
                component: ViewAllPost,
                noCollapse: true,
            },
            {
                type: 'collapse',
                name: 'Đang thanh toán',
                key: 'dang-thanh-toan',
                route: '/ho-so/dang-thanh-toan',
                icon: "play_circle_filled",
                component: ViewAllPost,
                noCollapse: true,
            },
            // {
            //     type: 'collapse',
            //     name: 'Từ chối',
            //     key: 'tu-choi',
            //     route: '/ho-so/tu-choi',
            //     icon: "do_disturb_on",
            //     component: ViewAllPost,
            //     noCollapse: true,
            // },
            // {
            //     type: 'collapse',
            //     name: 'Không thành công',
            //     key: 'khong-thanh-cong',
            //     route: '/ho-so/khong-thanh-cong',
            //     icon: "cancel",
            //     component: ViewAllPost,
            //     noCollapse: true,
            // },
            // {
            //     type: 'collapse',
            //     name: 'Không thanh toán',
            //     key: 'khong-thanh-toan',
            //     route: '/ho-so/khong-thanh-toan',
            //     icon: "do_disturb_on",
            //     component: ViewAllPost,
            //     noCollapse: true,
            // },
        ],
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
        route: '/mat-khau',
        component: PasswordPage,
        key: 'mat-khau',
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
