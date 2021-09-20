import React from 'react'
import { 
    Typography,
    Breadcrumbs, 
    Link,
} from '@mui/material/';
import { withRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const Breadcrumb = props => {
    const {
        history,
        location : { pathname }
    } = props

    const pathnames = pathname.split("/").filter(x => x)

    return (
        <ThemeProvider theme={theme}>
            <Breadcrumbs aria-label="breadcrumb">
                {pathnames.length > 0 ? (
                    <Link   fontSize={20} 
                            underline="hover" 
                            onClick={() => history.push("/")}>Home</Link>
                )
                :
                (
                    <Typography color="primary">Home</Typography>  
                )}
                
                {pathnames.map((name,index) => {
                    const route = `/${pathnames.slice(0,index + 1).join("/")}`
                    const isLast = index === pathnames.length - 1;
                    return isLast ? 
                    <Typography color="primary">{name}</Typography>
                    : <Link     fontSize={20} 
                                underline="hover" 
                                onClick={() => history.push(route)}>{name}</Link>
                })}
            </Breadcrumbs>
        </ThemeProvider>
    )
}

export default withRouter(Breadcrumb)

