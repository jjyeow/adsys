import React, {useState} from 'react'
import Image from 'next/image'

function Partner(props) {
    return (
        <div>
            <div style={{width: props.width ? "40vw" : "80vw"}}>
                <div style={{display: "flex", justifyContent: "flex-start", flexDirection: props.width ? "row" : "column", paddingBottom: 50}}>
                    <div style={{width: props.width ? "100%" : "50%", marginRight: props.width ? 50 : 0, borderRadius: '50%'}}>
                        <Image src={props.avatar} height={100} width={100}/>
                    </div>
                    <div style={{textAlign: "left", lineHeight: "1.5em", marginTop: props.width ? 0 : 30, fontSize: props.width ? "1.5rem" : "1.1rem"}}>
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
