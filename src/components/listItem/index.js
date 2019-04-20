// small code from a single list item. 
import Readct from 'react';
import '../style.css';

function ListItem(props) {
    return(
        <li>{props.children}</li>
    )
}

export default ListItem;