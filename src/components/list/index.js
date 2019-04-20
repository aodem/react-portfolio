// the containing un-ordered list tag for the lists on the portfolio
import React from 'react';
import '../styles.css';

function List(props) {
    return(
        <ul className={props.styling}>{props.children}</ul>
    )
}

export default List;