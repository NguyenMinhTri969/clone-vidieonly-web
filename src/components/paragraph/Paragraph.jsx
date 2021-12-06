import React from 'react';
import "./Paragraph.scss"

const Paragraph = props => {
    return (
        <p className={`text ${props.className}`}>
            {props.children}
        </p>
    )
}

export default Paragraph;