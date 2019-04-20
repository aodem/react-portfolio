import React from 'react';
import '../styles.css';

function AppShot(props) {
    return(
        <div className={props.styling}> 
            <a href={props.link}>
                <img src={process.env.PUBLIC_URL + `${props.image}`} alt="image" />
            </a>
        </div>
    )
}

export default AppShot;