import React, {useState} from 'react'
import Image from 'next/image'

function Partner(props) {
    return (
        <div>
            <div style={{width: props.width ? "40vw" : "80vw"}}>
                <div style={{display: "flex", justifyContent: "flex-start", flexDirection: props.width ? "row" : "column", paddingBottom: 50}}>
                    <div style={{width: props.width ? "100%" : "50%", marginRight: props.width ? 20 : 0}}>
                        <Image src={props.avatar} objectFit="cover" height={200} width={200} style={{borderRadius: "50%"}}/>
                    </div>
                    <div style={{textAlign: "justify", lineHeight: "1.2em", marginTop: props.width ? 0 : 30, fontSize: props.width ? "1.2rem" : "1.1rem"}}>
                        <div>
                            {props.description}
                        </div>
                        <br/>
                        <div><strong>{props.name}</strong></div>
                        <div>{props.title}, {props.companyName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner
