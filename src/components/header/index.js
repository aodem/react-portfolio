// Header component that can be flexible amongst the portfolio's need
import React from 'react';
import '../../components/styles.css'

function Header(props) {
    return(
        <div className={props.styling}>
            <strong>{props.children}</strong>
        </div>
    )
}

export default Header;