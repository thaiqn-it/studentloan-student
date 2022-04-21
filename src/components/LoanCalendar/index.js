import * as React from 'react'
import { styled, darken, alpha, lighten } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler'
import classNames from 'clsx'
import {
    Scheduler,
    MonthView,
    Appointments,
    Toolbar,
    DateNavigator,
    AppointmentTooltip,
    AppointmentForm,
    EditRecurrenceMenu,
    Resources,
    DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui'
import WbSunny from '@mui/icons-material/WbSunny'
import FilterDrama from '@mui/icons-material/FilterDrama'
import Opacity from '@mui/icons-material/Opacity'
import ColorLens from '@mui/icons-material/ColorLens'

import { green, deepOrange, lightBlue } from '@mui/material/colors'
import theme from 'theme'
import { ThemeProvider } from '@mui/material'

export const tasks = [
    {
        title: 'Recall Rebate Form',
        priorityId: 2,
        startDate: '2018-04-17T09:30',
        endDate: '2018-04-17T10:00',
    },
]

export const priorities = [
    { id: 1, text: 'Low Priority', color: green },
    { id: 2, text: 'Medium Priority', color: lightBlue },
    { id: 3, text: 'High Priority', color: deepOrange },
]

export const owners = [
    {
        text: 'Andrew Glover',
        id: 1,
        color: '#7E57C2',
    },
    {
        text: 'Arnie Schwartz',
        id: 2,
        color: '#FF7043',
    },
    {
        text: 'John Heart',
        id: 3,
        color: '#E91E63',
    },
    {
        text: 'Taylor Riley',
        id: 4,
        color: '#E91E63',
    },
    {
        text: 'Brad Farkus',
        id: 5,
        color: '#AB47BC',
    },
    {
        text: 'Arthur Miller',
        id: 6,
        color: '#FFA726',
    },
]

const PREFIX = 'Demo'

const classes = {
    cell: `${PREFIX}-cell`,
    content: `${PREFIX}-content`,
    text: `${PREFIX}-text`,
    sun: `${PREFIX}-sun`,
    cloud: `${PREFIX}-cloud`,
    rain: `${PREFIX}-rain`,
    sunBack: `${PREFIX}-sunBack`,
    cloudBack: `${PREFIX}-cloudBack`,
    rainBack: `${PREFIX}-rainBack`,
    opacity: `${PREFIX}-opacity`,
    appointment: `${PREFIX}-appointment`,
    apptContent: `${PREFIX}-apptContent`,
    flexibleSpace: `${PREFIX}-flexibleSpace`,
    flexContainer: `${PREFIX}-flexContainer`,
    tooltipContent: `${PREFIX}-tooltipContent`,
    tooltipText: `${PREFIX}-tooltipText`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
    circle: `${PREFIX}-circle`,
    textCenter: `${PREFIX}-textCenter`,
    dateAndTitle: `${PREFIX}-dateAndTitle`,
    titleContainer: `${PREFIX}-titleContainer`,
    container: `${PREFIX}-container`,
}

const getBorder = (theme) =>
    `1px solid ${
        theme.palette.mode === 'light'
            ? lighten(alpha(theme.palette.divider, 1), 0.88)
            : darken(alpha(theme.palette.divider, 1), 0.68)
    }`

const DayScaleCell = (props) => (
    <MonthView.DayScaleCell
        {...props}
        style={{ textAlign: 'center', fontWeight: 'bold' }}
    />
)

const StyledOpacity = styled(Opacity)(() => ({
    [`&.${classes.rain}`]: {
        color: '#4FC3F7',
    },
}))
const StyledWbSunny = styled(WbSunny)(() => ({
    [`&.${classes.sun}`]: {
        color: '#FFEE58',
    },
}))
const StyledFilterDrama = styled(FilterDrama)(() => ({
    [`&.${classes.cloud}`]: {
        color: '#90A4AE',
    },
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${classes.cell}`]: {
        color: '#78909C!important',
        position: 'relative',
        userSelect: 'none',
        verticalAlign: 'top',
        padding: 0,
        height: 70,
        width: 70,
        borderLeft: getBorder(theme),
        '&:first-of-type': {
            borderLeft: 'none',
        },
        '&:last-child': {
            paddingRight: 0,
        },
        'tr:last-child &': {
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: 'white',
        },
        '&:focus': {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            outline: 0,
        },
    },
    [`&.${classes.sunBack}`]: {
        backgroundColor: '#FFFDE7',
    },
    [`&.${classes.cloudBack}`]: {
        backgroundColor: '#ECEFF1',
    },
    [`&.${classes.rainBack}`]: {
        backgroundColor: '#E1F5FE',
    },
    [`&.${classes.opacity}`]: {
        opacity: '0.5',
    },
}))
const StyledDivText = styled('div')(() => ({
    [`&.${classes.text}`]: {
        padding: '0.5em',
        textAlign: 'center',
    },
}))
const StyledDivContent = styled('div')(() => ({
    [`&.${classes.content}`]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
}))

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
    [`&.${classes.appointment}`]: {
        borderRadius: '10px',
        '&:hover': {
            opacity: 0.6,
        },
    },
}))

const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
    [`&.${classes.flexibleSpace}`]: {
        flex: 'none',
    },
    [`& .${classes.flexContainer}`]: {
        display: 'flex',
        alignItems: 'center',
    },
}))
const StyledAppointmentsAppointmentContent = styled(
    Appointments.AppointmentContent
)(() => ({
    [`&.${classes.apptContent}`]: {
        '&>div>div': {
            whiteSpace: 'normal !important',
            lineHeight: 1.5,
        },
    },
}))

const appointments = [
    {
        id: 0,
        title: 'Hạn trả nợ',
        startDate: new Date(2022, 4, 23, 9, 30),
        endDate: new Date(2022, 4, 23, 11, 30),
        ownerId: 1,
    },
    {
        id: 0,
        title: 'Hạn trả nợ',
        startDate: new Date('2022-7-22'),
        endDate: new Date('2022-7-23'),
        ownerId: 2,
    },
]

const resources = [
    {
        fieldName: 'ownerId',
        title: 'Owners',
        instances: owners,
    },
]

const WeatherIcon = ({ id }) => {
    switch (id) {
        case 0:
            return <StyledOpacity className={classes.rain} fontSize="large" />
        case 1:
            return <StyledWbSunny className={classes.sun} fontSize="large" />
        case 2:
            return (
                <StyledFilterDrama className={classes.cloud} fontSize="large" />
            )
        default:
            return null
    }
}

const CellBase = React.memo(({ startDate, formatDate, otherMonth }) => {
    const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3)
    const isFirstMonthDay = startDate.getDate() === 1
    const formatOptions = { day: 'numeric' }
    return (
        <StyledTableCell
            tabIndex={0}
            className={classNames({
                [classes.cell]: true,
                // [classes.rainBack]: iconId === 0,
                // [classes.sunBack]: iconId === 1,
                // [classes.cloudBack]: iconId === 2,
                [classes.opacity]: otherMonth,
            })}
        >
            {/* <StyledDivContent className={classes.content}>
                <WeatherIcon classes={classes} id={iconId} />
            </StyledDivContent> */}
            <StyledDivText className={classes.text}>
                {formatDate(startDate, formatOptions)}
            </StyledDivText>
        </StyledTableCell>
    )
})

const TimeTableCell = CellBase

const Appointment = ({ ...restProps }) => (
    <StyledAppointmentsAppointment
        {...restProps}
        className={classes.appointment}
    />
)

const AppointmentContent = ({ ...restProps }) => (
    <StyledAppointmentsAppointmentContent
        {...restProps}
        className={classes.apptContent}
    />
)

const FlexibleSpace = ({ ...restProps }) => (
    <StyledToolbarFlexibleSpace
        {...restProps}
        className={classes.flexibleSpace}
    >
        <div className={classes.flexContainer}>
            {/* <ColorLens fontSize="large" htmlColor="#FF7043" /> */}
            <Typography variant="h6" style={{ marginLeft: '10px' }} fontWeight="medium">
                Lịch hạn trả tiền
            </Typography>
        </div>
    </StyledToolbarFlexibleSpace>
)

export default class LoanCalendar extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: appointments,
        }

        this.commitChanges = this.commitChanges.bind(this)
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state
            if (added) {
                const startingAddedId =
                    data.length > 0 ? data[data.length - 1].id + 1 : 0
                data = [...data, { id: startingAddedId, ...added }]
            }
            if (changed) {
                data = data.map((appointment) =>
                    changed[appointment.id]
                        ? { ...appointment, ...changed[appointment.id] }
                        : appointment
                )
            }
            if (deleted !== undefined) {
                data = data.filter((appointment) => appointment.id !== deleted)
            }
            return { data }
        })
    }

    render() {
        const { data } = this.state

        return (
            <ThemeProvider theme={theme}>
                <Paper style={{ borderRadius : 5,boxShadow: "1px 2px 3px #9E9E9E"}}>
                    <Scheduler data={data} locale={'vn-VN'}> 
                        <EditingState onCommitChanges={this.commitChanges} />
                        <ViewState defaultCurrentDate="2022-01-1" />

                        <MonthView
                            timeTableCellComponent={TimeTableCell}
                            dayScaleCellComponent={DayScaleCell}
                        />
                        <Appointments
                            appointmentComponent={Appointment}
                            appointmentContentComponent={AppointmentContent}
                        />
                        <Resources data={resources} />
                        <Toolbar flexibleSpaceComponent={FlexibleSpace} />
                        <DateNavigator />
                        <EditRecurrenceMenu />
                        <AppointmentTooltip
                            showCloseButton
                            // showDeleteButton
                            // showOpenButton
                        />
                        <AppointmentForm />
                        <DragDropProvider />
                    </Scheduler>
                </Paper>
            </ThemeProvider>
        )
    }
}
