import React, {useState} from 'react'

function VerticalDivider(props) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{width: "2px", height: props.height, background: "black"}}/>
        </div>
    )
}

export default VerticalDivider
