import React, {useState, useEffect, useRef} from 'react'
import { withRouter, useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../component/navigationbar'
import ParticleBackground from '../component/particle'

function HomePage() {
    const router = useRouter()
    const Logo = '/asset/logo.png'
    return (
        <div>
            <Head>
                <title>ADSYS Consulting Sdn Bhd</title>
                <meta name="description" content="ADSYS Consulting Sdn Bhd" />
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
                <div style={{}}>
                    <div style={{position: "relative"}}>
                        <ParticleBackground/>
                        <div style={{zIndex: 1000, fontSize: "2rem", position: "absolute", textAlign: "center", top: "30%", margin: "auto", bottom: 0, left: 0, right: 0}}>
                        Transform your idea into reality
                        </div>
                    </div>
                </div>
                <div style={{marginTop: -30, backgroundColor: "white", color: "#005c61", zIndex: 1000}}>
                    <h1 style={{height: 500}}>Hello</h1>
                </div>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
