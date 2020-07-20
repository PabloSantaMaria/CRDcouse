import React from 'react';
import './card.css';

// class Card extends React.Component {
    
//     render() {
//         return <div className='card-container'>
//                     <img alt='monster' src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}></img>
//                     <h2>{this.props.monster.name}</h2>
//                     <p>{this.props.monster.email}</p>
//                 </div>
//     }
    
// }
// export default Card;


export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);