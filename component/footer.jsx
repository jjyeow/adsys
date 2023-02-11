import * as React from 'react';
import Image from 'next/image'
import { makeStyles } from '@mui/styles';
import { withRouter, useRouter } from 'next/router'



export default function Footer(props) {
    const router = useRouter()
    const Logo = '/asset/logo.png'
    return (
        <div>
            <React.Fragment key={"footer"}>
                <div style={{zIndex: -1, width: "100vw", height: "100%", paddingTop: 50, paddingBottom: 50, backgroundColor: props.backgroundColor}}>
                    <div style={{position: "relative", width: "100vw", height: "10vh", margin: "auto"}}>
                        <Image alt="ADSYS Logo" layout="fill" objectFit='contain' src={Logo} />
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around", flexDirection: props.width ? "row": "column", textAlign: "center", marginTop: 50, fontSize: "1.5rem"}}>
                        <div><u onClick={()=> {router.push('/webdevelopment')}}>Web Dev</u></div>
                        <div><u onClick={()=> {router.push('/process')}}>Process</u></div>
                        <div><u onClick={()=> {router.push('/aboutus')}}>About Us</u></div>
                        <div><u onClick={()=> {router.push('/contactus')}}>Contact Us</u></div>
                    </div>
                    <div style={{textAlign: "center", paddingTop: 50}}>ADSYS Consulting 2023 &#169; All rights reserved</div>
                </div>
            </React.Fragment>
        </div>
    );
}
