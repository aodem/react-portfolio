// bigger container for the pages themselves 
import React from 'react';
import '../styles.css';

function Container(props) {
    return(
        <div className={props.styling}>{props.children}</div>
    )
}

export default Container;