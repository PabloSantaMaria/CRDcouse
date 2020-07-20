import React from 'react';
import './card-list.css';
import {Card} from '../card/card';
// import Card from '../card/card';

// class CardList extends React.Component {

//     render() {
//         return <div className='card-list'>
//                  {this.props.monsters.map(monster => (
//                      <Card key={monster.id} monster={monster}></Card>
//                  ))}
//                 </div>
//     }
// }
// export default CardList;

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}></Card>
        ))}
    </div>
);
