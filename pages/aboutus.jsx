import React, {useState, useEffect, useRef} from 'react'
import { withRouter, useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import NavigationBar from '../component/navigationbar'
import Footer from '../component/footer'
import { propsToClassKey } from '@mui/styles'

function AboutUs() {
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
        <div style={{overflowX: "hidden", overFlowY: "hidden"}}>
            <Head>
                <title>ADSYS Consulting Sdn Bhd</title>
                <meta name="description" content="About Us" />
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
                <div style={{paddingTop: "20vh", backgroundColor: "white", color: "#005c61", zIndex: 1000}}>
                    <div style={{ textAlign: "left", display: "flex", flexDirection: "column", width: "60vw", justifyContent: "center", alignItems: "center", margin: "auto"}}>
                        <div style={{textAlign: "left", width: "100%", fontSize: width ? "3rem" : "2rem"}}>ABOUT US</div>
                        <div style={{fontSize: width ? "2rem" : "1rem", marginTop: 50}}>
                            Advanced Databse and System (ADSYS) Consulting Sdn Bhd (1322355-P) is a full stack software development company providing business web application services in Malaysia.
                            <br/>
                            <br/>
                            Currently, we only provide web application development service using the latest technologies like ReactJS, NextJS and Django on a Web Server Architecture, but rest assured, we strive to be in a constant learning mindset.
                            <br/>
                            <br/>
                            Starting in 2019, we had worked on multipled web projects for local businesses. We fundamentally believe that each project that we receive have it's own precious meaning that will benefit the business and the users.
                            <br/>
                            <br/>
                            Whether you are a newly started startup or a well established enterprise, we are able to bring your idea to life through web development!
                        </div>
                    </div>
                </div>
                <Footer backgroundColor={"white"} width={width}/>
            </div>
        </div>
    )
}

export default withRouter(AboutUs)
