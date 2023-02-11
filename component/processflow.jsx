import React, {useState} from 'react'

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { propsToClassKey } from '@mui/styles';

function ProcessFlow(props) {
    
    const Logo = '/asset/logo.png'

    return (
        <div>
            <div>
                <div style={{padding: 20}}>{props.number}</div>
                <div style={{display: "flex", paddingLeft: 30}}>
                    <div style={{width: "2px", height: "25vh", background: "black"}}/>
                    <div style={{marginLeft: 10, display: "flex", flexDirection: "column", width: props.width ? "30vw" : "50vw"}}>
                        {props.icon}
                        <h3>{props.title}</h3>
                        <div style={{textAlign: "justify"}}>{props.description}</div>
                        <Stack direction={props.width ? "row" : "column"} spacing={1} style={{marginTop: 10}}>
                            {props.highlights?.map((item) => {
                                return (
                                    <Chip label={item} variant="outlined" style={{color: "white", backgroundColor: "#005c61"}}/>
                                )
                            })}
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessFlow
