import React from 'react';

function CustomList(props) {
    return(
        <div className={props.styling}>
            <div>{props.children}</div>
        </div>
    )
}

export default CustomList;