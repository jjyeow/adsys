import React, {useState, useEffect, useRef} from 'react'
import { withRouter, useRouter } from 'next/router'
import { styled } from '@mui/material/styles';
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import NavigationBar from '../component/navigationbar'
import ParticleBackground from '../component/particle'
import Footer from '../component/footer'

import Partner from '../component/partner'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


import CodeIcon from '@mui/icons-material/Code';
import ForumIcon from '@mui/icons-material/Forum';
import { makeStyles } from '@mui/styles';


const CustomDivider = (props) => (
    <Divider style={{marginTop: 50, marginBottom: 50}}/>
)

const styles = makeStyles({
    drawer: {
        background: "#005c61",
        color: "white"
    }
})

function HomePage() {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    const [width, setWidth] = useState(undefined)
    const [hasWindow, setHasWindow] = useState(false);
    const Logo = '/asset/logo.png'
    const AWS = '/asset/aws-logo.png'
    const Django = '/asset/django-logo.png'
    const Next = '/asset/nextjs-logo.png'
    const Python = '/asset/python-logo.png'
    const ReactLogo = '/asset/React-icon.png'

    const PartnerAvatar = '/asset/boy.png'
    const KhaiAvatar = '/asset/khai.jpeg'

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
                <div>
                    <div style={{position: "relative"}}>
                        <ParticleBackground height={'100vh'} width={'100vw'} mobile={width ? false : true}/>
                        <div style={{
                            zIndex: 1, width: width ? "40vw" : "80vw", 
                            fontSize: width ? "2.0rem" : "1.6rem", position: "absolute", 
                            textAlign: "center", top: "-70vh", 
                            margin: "auto", bottom: 0, 
                            left: 0, right: 0, 
                        }}>
                            <h1>MAKE IDEAS HAPPEN</h1>
                            <div>We are a small team of web developers that could transform your ideas into reality via&nbsp;
                                <u style={{color: "black"}} onClick={()=>{router.push("/webdevelopment")}}>web development</u>.
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: "100vh", backgroundColor: "white", color: "#005c61", zIndex: 9999}}>
                    <div style={{ paddingTop: "5vh", paddingLeft: "5vw", paddingRight: "5vw", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h1>OUR DUTY</h1>
                        <CustomDivider/>
                        {/* <div>
                            <div style={width ? {display: "flex", background: "#c2fcd1", paddingLeft: 40, paddingRight: 40} : {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#c2fcd1", paddingLeft: 40, paddingRight: 40}}>
                                <div style={width ? 
                                    {position: "relative", height: "70vh", margin: "0px 2vw 0px 2vw", maxWidth: "45vw", width: "45vw"} :
                                    {position: "relative", height: "70vh", margin: "0px 2vw 0px 2vw", maxWidth: "90vw", width: "90vw"} }>
                                    <Image alt="Idea" layout="fill" objectFit='contain' src={Idea} />
                                </div>
                                <div style={width ?
                                    {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "45vw", width: "45vw"} :
                                    {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "90vw", width: "90vw"}}>
                                    <h1>Tech Consult</h1>
                                    <h2>Not sure if your idea to increase your business productivity is feasible?</h2>
                                    <h3>Providing you consultation on the possibility in digitalizing your business through web development!</h3>
                                </div>
                            </div>
                            <div style={width ? {display: "flex", background: "#c2e1fc", paddingLeft: 40, paddingRight: 40} : {display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#c2e1fc", paddingLeft: 40, paddingRight: 40}}>
                                <div style={width ?
                                    {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "45vw", width: "45vw"} :
                                    {display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "90vw", width: "90vw"}}>
                                    <h1>Customised Software</h1>
                                    <h2>Want to digitalize your business according to your own process?</h2>
                                    <h3>Working alongside with you to develop a customised software through your own mind to maximize your business's productivity</h3>
                                </div>
                                <div style={width ? 
                                    {position: "relative", height: "70vh", margin: "0px 2vw 0px 2vw", maxWidth: "45vw", width: "45vw"} :
                                    {position: "relative", height: "70vh", margin: "0px 2vw 0px 2vw", maxWidth: "90vw", width: "90vw"} }>
                                    <Image alt="Idea" layout="fill" objectFit='contain' src={Process} />
                                </div>
                            </div>
                        </div> */}
                        <Grid sx={{ flexGrow: 1 }} container spacing={5} style={{marginTop: 10, marginBottom: 30}}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={10}>
                                    <Grid key={"1"} item>
                                        <Card sx={width ? { maxWidth: "35vw", height: 500} : { maxWidth: "90vw", height: 400}} style={{backgroundColor: "#005c61", color: "white"}}>
                                            <CardHeader
                                                avatar={
                                                <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                                                    <ForumIcon style={{color: "#005c61"}}/>
                                                </Avatar>
                                                }
                                                title="Tech Consult"
                                            />
                                            <CardContent>
                                                <Typography variant="body1" color="white" style={width ? {fontSize: "1.5rem", maxHeight: 100, height: 100} : {fontSize: "1.1rem", maxHeight: 100, height: 100}}>
                                                    Not sure if your idea to increase your business productivity is feasible?
                                                </Typography>
                                                <Divider style={{marginBottom: 20, marginTop: 20}}/>
                                                <Typography variant="body2" color="lightgray" style={width ? {fontSize: "1.3rem"} : {fontSize: "0.9rem"}}>
                                                    Providing you consultation on the possibility in digitalizing your business through <u style={{color: "lightgray"}} onClick={()=>{router.push("/webdevelopment")}}>web development</u>!
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing={false} onClick={()=>{router.push("/contactus")}}>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon/>
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid key={"2"} item>
                                        <Card sx={width ? { maxWidth: "35vw", height: 500} : { maxWidth: "90vw", height: 400}} style={{backgroundColor: "#005c61", color: "white"}}>
                                            <CardHeader
                                                avatar={
                                                <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                                                    <CodeIcon style={{color: "#005c61"}}/>
                                                </Avatar>
                                                }
                                                title="Customised Software"
                                            />
                                            <CardContent>
                                                <Typography variant="body1" color="white" style={width ? {fontSize: "1.5rem", maxHeight: 100, height: 100} : {fontSize: "1.1rem", maxHeight: 70, height: 70}}>
                                                    Want to digitalize your business according to your own process?
                                                </Typography>
                                                <Divider style={{marginBottom: 20, marginTop: 20}}/>
                                                <Typography variant="body2" color="lightgray" style={width ? {fontSize: "1.3rem"} : {fontSize: "0.9rem"}}>
                                                    Working alongside with you to develop a customised software through your own mind to maximize your business&apos;s productivity
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing={false} onClick={()=>{router.push("/contactus")}}>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <div style={{display: "flex", justifyContent: "space-around"}}>
                            <Paper elevation={24} style={{width: "40vw", marginLeft: "3vw", marginRight: "3vw", paddingBottom: 20}}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <ForumIcon style={{margin: "auto 20px auto 20px"}}/>
                                    <h2>Tech Consult</h2>
                                </div>
                                <Divider/>
                                <div style={{padding: "0px 5vw 0px 5vw"}}>
                                    <Typography style={{fontSize: "1.2rem", marginBottom: 20, marginTop: 20, height: "15vh"}}>
                                        Not sure if your idea to increase your business productivity is feasible?
                                    </Typography>
                                    <Typography style={{fontSize: "0.8rem"}}>
                                        Providing you consultation on the possibility in digitalizing your business through web development!
                                    </Typography>
                                </div>
                            </Paper>
                            <Paper elevation={24} style={{width: "40vw", marginLeft: "3vw", marginRight: "3vw", paddingBottom: 20}}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <CodeIcon style={{margin: "auto 20px auto 20px"}}/>
                                    <h2>Customised Software</h2>
                                </div>
                                <Divider/>
                                <div style={{padding: "0px 5vw 0px 5vw"}}>
                                    <Typography style={{fontSize: "1.2rem", marginBottom: 20, marginTop: 20, height: "15vh"}}>
                                        Want to digitalize your business according to your own process?
                                    </Typography>
                                    <Typography style={{fontSize: "0.8rem"}}>
                                        Working alongside with you to develop a customised software through your own mind to maximize your business's productivity
                                    </Typography>
                                </div>
                            </Paper>
                        </div> */}
                        {/* <table>
                            <tbody>
                                <tr>
                                    <td style={{position: "relative"}}>
                                        <div className={ 'ripple-logo' }></div>
                                        <ForumIcon/>
                                        
                                    </td>
                                    <td><h2>Tech Consult</h2></td>
                                    <td style={{width: "30vw"}}>
                                        <h3>Not sure if your idea to increase your business productivity is feasible?</h3>
                                        <p>Providing you consultation on the possibility in digitalizing your business through web development!</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><CodeIcon /></td>
                                    <td><h2>Customised Software</h2></td>
                                    <td style={{width: "30vw"}}>
                                        <h3>Want to digitalize your business according to your own process?</h3>
                                        <p>Working alongside with you to develop a customised software through your own mind to maximize your business's productivity</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
                        {/* <Divider/>
                        <h1>Why Us?</h1>
                        <div>
                            
                        </div> */}
                        <CustomDivider/>
                        <h1>TECH STACKS</h1>
                        <h2>All the latest frameworks, open source and developer tools are used internally in ADSYS.</h2>
                        <div style={width ? {display: "flex", justifyContent: "space-around"} : {display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                            <div>
                                <h2>Frontend Development</h2>
                                <div style={{display: "flex", justifyContent: "space-around"}}>
                                    <div>
                                        <Image src={ReactLogo} height={100} width={100}/>
                                        <p>ReactJS</p>
                                    </div>
                                    <div>
                                        <Image src={Next} height={100} width={100}/>
                                        <p>NextJS</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>Backend Development</h2>
                                <div style={{display: "flex", justifyContent: "space-around"}}>
                                    <div>
                                        <Image src={Python} height={100} width={100}/>
                                        <p>Python</p>
                                    </div>
                                    <div>
                                        <Image src={Django} height={100} width={100}/>
                                        <p>Django</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div>
                                <h2>Architecture</h2>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <div>
                                        <Image src={AWS} height={100} width={167}/>
                                        <p>Amazon Web Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CustomDivider/>
                        <h1>WHO WE&apos;VE ASSOCIATED WITH</h1>
                        <br/>
                        <div style={{display: "flex", width: "90vw", flexWrap: "wrap", justifyContent: "space-between", margin: "auto"}}>
                            <Partner 
                                width={width}
                                name={"Khai"}
                                title={"Chief Technology Director"}
                                companyName={"Enlliance Management"}
                                avatar={KhaiAvatar}
                                description={"ADSYS Consulting is a top-tier ERP development company that is known for providing exceptional service. Their team of talented developers is committed to delivering projects on time and exceeding expectations, while maintaining the highest level of quality. They have a deep understanding of the latest technologies and trends in the industry, and their dedication to understanding their clients' unique needs sets them apart from their competitors. ADSYS consistently delivers successful projects and is a reliable, knowledgeable, and results-driven partner for any business."}
                            />
                            {/* <Partner 
                                width={width}
                                name={"Partner 2"}
                                title={"Director"}
                                companyName={"Company B"}
                                avatar={PartnerAvatar}
                                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
                            /> */}
                        </div>
                    </div>  
                    <CustomDivider/>
                </div>
                <Footer width={width}/>
            </div>
        </div>
    )
}

export default withRouter(HomePage)
