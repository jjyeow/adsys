import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import { withRouter, useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import WebhookIcon from '@mui/icons-material/Webhook';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    drawer: {
        background: "#005c61",
        color: "white"
    }
})

const styles2 = theme => ({
    listItemText:{
      fontSize:'48px',//Insert your required size
    }
});

export default function NavigationBar() {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const Logo = '/asset/logo.png'
    const classes = styles();
    const classes2 = styles2();
    return (
        <div style={{zIndex: 1000, position: "fixed", top: 0, background: "white", width: "100vw"}}>
            <React.Fragment key={"navbar"}>
                <div style={{zIndex: 1000, display: "flex", justifyContent: "space-between", paddingTop: "2vh"}}>
                    <div style={{position: "relative", width: "17vw", height: "10vh", margin: "0px 2vw 0px 5vw"}}>
                        <Image alt="ADSYS Logo" layout="fill" objectFit='contain' src={Logo} onClick={()=>{router.push('/')}}/>
                    </div>
                    <div style={{zIndex: 1000,display: "flex", flexDirection: "column", justifyContent: "center", height: "10vh", margin: "0px 5vw 0px 2vw"}}>
                        <MenuIcon onClick={()=>{setOpen(true)}} style={{ color: "#005c61" }} />
                    </div>
                </div>
                
                <Drawer
                    classes={{ paper: classes.drawer }}
                    open={open}
                    anchor={"right"}
                    onClose={()=> {setOpen(false)}}
                >
                    <Box
                        role="presentation"
                    >
                    <List>
                        {['Web Dev', 'Process', 'About Us'].map((text, index) => (
                        <ListItem key={text} disablePadding
                            onClick={() => {
                                if (index ===0) {
                                    router.push("/webdevelopment")
                                } else if (index === 1) {
                                    router.push("/process")
                                } else {
                                    router.push("/aboutus")
                                }
                            }}
                        >
                            <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <WebhookIcon style={{ color: "white" }} /> 
                                    : index === 1 ? <AccountTreeIcon style={{ color: "white" }}/> 
                                    : <InfoIcon style={{ color: "white" }}/>
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} classes={{primary:classes2.listItemText}} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Contact Us'].map((text, index) => (
                        <ListItem key={text} disablePadding onClick={()=>{router.push("/contactus")}}>
                            <ListItemButton>
                            <ListItemIcon>
                                <PermContactCalendarIcon style={{ color: "white" }}/>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
