// reuseable button comp
import React from 'react';
import '../styles.css';

function Button(props) {
    return(
        <div className="button">
            <div className="buttonTitle">
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Button;