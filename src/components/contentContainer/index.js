// general container that fit greater sections of the portfolio pages 
import React from 'react';
import '../styles.css';

function ContentContainer(props) {
    return(
        <div className={props.styling}>{props.children}</div>
    )
}

export default ContentContainer;