import React, {useState, useEffect, useRef} from 'react'
import { withRouter, useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import NavigationBar from '../component/navigationbar'
import Footer from '../component/footer'
import ParticleBackground from '../component/particle'
import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function ContactUs() {
    const router = useRouter()
    const [width, setWidth] = useState(undefined)
    const [hasWindow, setHasWindow] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [hpNo, setHpNo] = useState("")
    const [message, setMessage] = useState("")
    const [enquiryType, setEnquiryType] = useState("Project Enquiry")
    
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

    const submitEnquiry = () => {
        let errorMessage = ""
        if (name == "") {
            errorMessage += "Please provide your name!\n\n"
        }

        if (email == "" && hpNo == "") {
            errorMessage += "Please at least provide one contact option, either your email or your phone number!"
        }

        if (errorMessage != "") {
            toast.error(errorMessage)
            return
        }

        axios
            .post("https://getform.io/f/578aa3c4-f2b7-46fd-ba65-ece7fb364a9f", {
                name: name,
                email: email ? email : "",
                hpNo: hpNo ? hpNo : "",
                message: message ? message : "",
                enquiryType: enquiryType ? enquiryType : ""
            },
            { headers: {'Accept': 'application/json'}})
            .then(response => 
                toast.success("Your response has been submitted! I will be contacting you soon!")
            )
            .catch(error => 
                toast.success("There is something wrong with the submission, please try again! :(")
            )
    }

    return (
        <div>
            <Head>
                <title>ADSYS Consulting Sdn Bhd</title>
                <meta name="description" content="Contact Us" />
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
            <div style={{width: "100vw", height: "100%", color: "#005c61"}}>
                <NavigationBar/>
                <div>
                    <div style={{position: "relative"}}>
                        <ParticleBackground height={'100vh'} width={'100vw'} mobile={width ? false : true}/>
                    </div>
                </div>
                <div style={{paddingTop: "20vh", width: width ? "50vw" : "90vw", margin: "auto", color: "#005c61", zIndex: 1000}}>
                    <h1 style={{textAlign: "center"}}>Contact Us</h1>
                    <div className="center">Drop us a message!</div>
                    <div style={{display: "flex", alignItems: width ? "" : "center", justifyContent: "space-between", flexDirection: width ? "row" : "column", fontSize: "1.5rem", paddingTop: 50}}>
                        <div style={{paddingLeft: width ? 50 : 0, paddingTop: width ? 0 : 50, paddingBottom: width ? 0 : 50, textAlign: width ? "left" : "center", height: "100%"}}>
                            <div style={{fontWeight: "bold", fontSize: "2rem"}}>Phone Number</div>
                            <br/>
                            <div>+6012-9281428</div>
                            <br/>
                            <br/>
                            <Link 
                                href={
                                    `https://api.whatsapp.com/send?phone=+60129281428&text=Hi, I would like to know more about the service that your company are providing!`
                                    } target="_blank">
                                <WhatsAppIcon style={{fontSize: 36, marginRight: 10, color: "#25D366"}}/>
                            </Link>
                            <Link href="https://www.linkedin.com/company/adsys-consulting-sdn-bhd/" target="_blank">
                                <LinkedInIcon style={{fontSize: 36, color: "#0072b1"}}/>
                            </Link>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: width ? "60%" : "95%"}}>
                            <TextField
                                id="outlined-select"
                                select
                                label="Enquiry Type"
                                helperText="Please select Enquiry Type"
                                value={enquiryType}
                                onChange={(e) => {
                                    setEnquiryType(e.target.value)
                                }}
                            >
                                <MenuItem key={"Project Enquiry"} value={"Project Enquiry"}>
                                    {"Project Enquiry"}
                                </MenuItem>
                                <MenuItem key={"General Info"} value={"General Info"}>
                                    {"General Info"}
                                </MenuItem>
                            </TextField>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                fullWidth
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                style={{marginTop: 30, marginRight: 30}}
                            />
                            <TextField
                                style={{marginTop: 30, marginRight: 30}}
                                id="outlined"
                                label="Email"
                                fullWidth
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            <TextField
                                style={{marginTop: 30, marginRight: 30}}
                                id="outlined"
                                label="Contact No."
                                fullWidth
                                value={hpNo}
                                onChange={(e) => {
                                    setHpNo(e.target.value)
                                }}
                            />
                            <TextField
                                style={{marginTop: 30, marginRight: 30}}
                                id="filled-multiline-flexible"
                                label="Message"
                                multiline
                                rows={4}
                                fullWidth
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                            />
                            <Button variant="outlined" style={{marginTop: 50, fontSize: "1.2rem"}} onClick={()=>{submitEnquiry()}}>SUBMIT</Button>
                        </div>
                    </div>
                </div>
                <Footer backgroundColor={"white"} width={width}/>
            </div>
        </div>
    )
}

export default withRouter(ContactUs)
