import React, {useState, useEffect, useRef} from 'react'
import { withRouter, useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import NavigationBar from '../component/navigationbar'
import ProcessFlow from '../component/processflow'
import Footer from '../component/footer'

import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LaunchIcon from '@mui/icons-material/Launch';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Process() {
    const router = useRouter()
    const [width, setWidth] = useState(undefined)
    const [hasWindow, setHasWindow] = useState(false);
    const Logo = '/asset/logo.png'

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
        const updateWidth = () => {
          setWidth(window.innerWidth > 736 ? true : false)
        }
        updateWidth()
        window.removeEventListener('resize', updateWidth)
        window.addEventListener('resize', updateWidth)
        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, [])

    return (
        <div>
            <Head>
                <title>ADSYS Consulting Sdn Bhd</title>
                <meta name="description" content="Process" />
                <link rel="icon" href={Logo} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="ADSYS Consulting" />
                <meta name="DC.title" content="ADSYS Consulting" />
                <meta name="geo.region" content="MY-14" />
                <meta name="geo.placename" content="Kuala Lumpur" />
                <meta name="geo.position" content="3.114923;101.620650" />
                <meta name="ICBM" content="3.114923;101.620650" />
                <meta name="Language" content="English" />
                <meta name="Publisher" content="ADSYS Consulting" />
                <meta name="Revisit-After" content="Daily" />
                <meta name="distribution" content="Global" />
                <meta name="Robots" content="INDEX, FOLLOW" />
                <meta name="YahooSeeker" content="INDEX, FOLLOW" />
                <meta name="bingbot" content="INDEX, FOLLOW" />
                <meta name="googlebot" content="index,follow"/>
                <meta name="Rating" content="General"/>
                <meta name="allow-search" content="yes" />
                <meta name="expires" content="never" />
                <meta name="description" content="ADSYS Consulting Sdn Bhd" />
                <link rel="canonical" href="https://adsysconsulting.com" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ADSYS Consulting Sdn Bhd" />
                <meta property="og:description" content="Web Development Service Provider" />
                <meta property="og:url" content="https://adsysconsulting.com" />
                <meta property="og:site_name" content="ADSYS Consulting" />
                <meta property="article:modified_time" content="2022-10-08T21:29:00+00:00" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ADSYS Consulting" />
                <meta name="twitter:description" content="ADSYS Consulting" />
                <link rel="alternate" hrefLang="en" href="https://adsysconsulting.com" />
                <meta name="keywords" content="website, web development, web application" />
            </Head>
            <div style={{width: "100vw", height: "100vh", backgroundColor: "white", color: "#005c61"}}>
                <NavigationBar/>
                <div style={{marginTop: "12vh", backgroundColor: "white", color: "#005c61", zIndex: 1000}}>
                    <div style={{display: "flex", justifyContent: "center", paddingTop: "20vh"}}>
                        <div style={ width ? {width: "40vw", maxWidth: "40vw"} : {width: "80vw"}}>
                            <h1>HOW WE WORK</h1>
                            <div style={{textAlign: "justify"}}>Currently, we are a local startup software house in Malaysia, providing <u style={{color: "black"}} onClick={()=>{router.push("/webdevelopment")}}>web development</u> service to our clients. We believe in using the AGILE method which emphasize on transparency and efficiency while delivering our services.</div>
                        </div>
                    </div>
                    <div style={{margin: "auto", paddingTop: 50, width: "80vw", display: "flex", flexWrap: "wrap", justifyContent: "space-around", flexDirection: width ? "row" : "column"}}>
                        <ProcessFlow 
                            icon={<FilterFramesIcon style={{fontSize: 40}}/>} 
                            number={"01"} 
                            title={"Wireframe"} 
                            description={"A blueprint is created to identify the basic concepts and foundation, wireframe is essentially the masterplan of your system."}
                            highlights={["Blueprint", "Flowchart", "Concept"]}
                            width={width}
                        />
                        <ProcessFlow 
                            icon={<DesignServicesIcon style={{fontSize: 40}}/>} 
                            number={"02"} 
                            title={"UI/UX Design"} 
                            description={"By developing a mock up design, visualization can be done easily to obtain feedback before the development starts."}
                            highlights={["Design", "Visual"]}
                            width={width}
                        />
                        <ProcessFlow 
                            icon={<CodeIcon style={{fontSize: 40}}/>} 
                            number={"03"} 
                            title={"Development"} 
                            description={"Through Agile practice, development are more efficient and brings your business one step closer to enhanced productivity."}
                            highlights={["Coding", "Revision", "Version"]}
                            width={width}
                        />
                        <ProcessFlow 
                            icon={<SettingsSuggestIcon style={{fontSize: 40}}/>} 
                            number={"04"} 
                            title={"Maintenance"} 
                            description={"Worry not! We will be constantly maintaining the application from any pesky bugs!"}
                            highlights={["Bug Fixing", "Support", "Knowledge Sharing"]}
                            width={width}
                        />
                        <ProcessFlow 
                            icon={<AutoAwesomeIcon style={{fontSize: 40}}/>} 
                            number={"05"} 
                            title={"Enhancement"} 
                            description={"If you're feeling ambitious and have ideas on feature enhancement or expansion, we will always be open to explore it together!"}
                            highlights={["New Feature", "Optimisation"]}
                            width={width}
                        />
                        <ProcessFlow 
                            icon={<LaunchIcon style={{fontSize: 40}}/>} 
                            number={"06"} 
                            title={"Launch"} 
                            description={"Your initial idea is now finally launched into the real world."}
                            highlights={["Web Server", "Host"]}
                            width={width}
                        />
                        {/* <div style={{padding: 20}}>01</div>
                        <div style={{display: "flex", paddingLeft: 30}}>
                            <div style={{width: "2px", height: "30vh", background: "black"}}/>
                            <div style={{marginLeft: 20, display: "flex", flexDirection: "column", width: "20vw"}}>
                                <FilterFramesIcon style={{fontSize: 72}}/>
                                <h3>Wireframe</h3>
                                <div>A blueprint is created to identify the basic concepts and foundation, wireframe is essentially the masterplan of your system.</div>
                                <Stack direction="row" spacing={1} style={{marginTop: 10}}>
                                    <Chip label="Blueprint" variant="outlined" style={{color: "white", backgroundColor: "#005c61"}}/>
                                    <Chip label="Flowchart" variant="outlined" style={{color: "white", backgroundColor: "#005c61"}}/>
                                    <Chip label="Concept" variant="outlined" style={{color: "white", backgroundColor: "#005c61"}}/>
                                </Stack>
                            </div>
                        </div> */}
                    </div>
                    <Footer width={width}/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Process)
