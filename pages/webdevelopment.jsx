import React, {useState, useEffect, useRef} from 'react'
import { withRouter, useRouter } from 'next/router'
import { styled } from '@mui/material/styles';
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import NavigationBar from '../component/navigationbar'
import VerticalDivider from '../component/verticaldivider';
import Footer from '../component/footer';


function WebDevelopment() {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    const [width, setWidth] = useState(undefined)
    const [hasWindow, setHasWindow] = useState(false);
    const Logo = '/asset/logo.png'
    const WebDev = '/asset/webdev.jpg'
    const Boy = '/asset/boy.png'
    const Girl = '/asset/girl.png'
    const Suit = '/asset/suit.png'
    const ReactLogo = '/asset/React-icon.png'

    const Idea = '/asset/idea.png'
    const Process = '/asset/process.png'

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                <meta name="description" content="Web Development" />
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
            <div style={{width: "100vw", height: "100vh", backgroundColor: "white", color: "#005c61", lineHeight: "1.5em"}}>
                <NavigationBar/>
                <div style={{marginTop: "12vh", backgroundColor: "white", color: "#005c61", zIndex: 1000}}>
                    <VerticalDivider height={"25vh"}/>
                    <div style={width ? {display: "flex", paddingLeft: 40, paddingRight: 40} : {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: 40, paddingRight: 40}}>
                        <div style={width ? 
                            {position: "relative", height: "70vh", margin: "0px 2vw 0px 5vw", maxWidth: "45vw", width: "45vw"} :
                            {position: "relative", height: "70vh", margin: "0px 2vw 0px 5vw", maxWidth: "90vw", width: "90vw"} }>
                            <Image alt="Web-Development" layout="fill" objectFit='contain' src={WebDev} />
                        </div>
                        <div style={width ?
                            {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "45vw", width: "45vw"} :
                            {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "90vw", width: "90vw"}}>
                            <h2>One of the top</h2>
                            <h1>Web Development Company</h1>
                            <h2>in Malaysia</h2>
                        </div>
                    </div>
                    <VerticalDivider height={"15vh"}/>
                    <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
                        <div className='center' style={{paddingLeft: width ? "20vw" : "5vw", paddingRight: width ? "20vw" : "5vw"}}>
                            More and more businesses are diverging into digitalization to improve their productivity, one of the common obstacles are the lack of resources on how to kickstart the digitalization process. Hiring in-house web developers could take a tremendous toll if not done right.
                        </div>
                    </div>
                    <div style={{paddingRight: width ? "20vw" : "5vw", paddingLeft: width ? "20vw" : "5vw"}}>
                        <h2 className='h2-center'>First, what is web development?</h2>
                        <p className='center'>Web development refers to the building, creatin and maintaining of websites. It involves aspects such as database management, web design and web programming. In simplicity, it is the creation of an application that operates over the internet. Web Application triumphs over Mobile Application with the easier accesiblity, lesser storage space usage and faster time to market (TTM).</p>
                    </div>
                    <VerticalDivider height={"15vh"}/>
                    <div>
                        <h2 className='h2-center'>Our Web Development Team</h2>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                <div style={{position: "relative", height: width ? "15vh" : "6vh", margin: "0px 2vw 10px 2vw", maxWidth: width ? "15vh" : "6vh", width: width ? "15vh" : "6vh"}}>
                                    <Image alt="Guy with a suit" layout="fill" objectFit='contain' src={Suit} />
                                </div>
                                <div style={{textAlign: "center", fontSize: width ? "1.5rem" : "0.8rem"}}>Project Manager</div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                <div style={{position: "relative", height: width ? "15vh" : "6vh", margin: "0px 2vw 10px 2vw", maxWidth: width ? "15vh" : "6vh", width: width ? "15vh" : "6vh"}}>
                                    <Image alt="Girl" layout="fill" objectFit='contain' src={Girl} />
                                </div>
                                <div style={{textAlign: "center", fontSize: width ? "1.5rem" : "0.8rem"}}>Front-end Developer</div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                <div style={{position: "relative", height: width ? "15vh" : "6vh", margin: "0px 2vw 10px 2vw", maxWidth: width ? "15vh" : "6vh", width: width ? "15vh" : "6vh"}}>
                                    <Image alt="Boy" layout="fill" objectFit='contain' src={Boy} />
                                </div>
                                <div style={{textAlign: "center", fontSize: width ? "1.5rem" : "0.8rem"}}>Backend Developer</div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                <div style={{position: "relative", height: width ? "15vh" : "6vh", margin: "0px 2vw 10px 2vw", maxWidth: width ? "15vh" : "6vh", width: width ? "15vh" : "6vh"}}>
                                    <Image alt="Boy" layout="fill" objectFit='contain' src={Boy} />
                                </div>
                                <div style={{textAlign: "center", fontSize: width ? "1.5rem" : "0.8rem"}}>UI/UX Designer</div>
                            </div>
                        </div>
                        <div style={{paddingRight: width ? "20vw" : "5vw", paddingLeft: width ? "20vw" : "5vw", paddingTop: 50, paddingBottom: 50}}>
                            <div className='center'>With our well-experienced developer, you could solely focus on your business growth while we take care of all your technical needs.</div>
                            <br/>
                            <div className='center'>This is why most startups or companies from difference background are using this approach for web development service in Malaysia</div>
                        </div>
                    </div>
                </div>
                <Footer backgroundColor={"white"} width={width}/>
            </div>
        </div>
    )
}

export default withRouter(WebDevelopment)
