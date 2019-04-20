import React from 'react';
import '../styles.css';

function CustomItem(props) {
    return(
        <div>
            <p className={props.styling}>{props.children}</p>
        </div>
    )
}

export default CustomItem;