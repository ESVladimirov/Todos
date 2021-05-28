import React from 'react'

export default function Nav(props) {
    return (
        <div className='Actions'>
            <button onClick={props.createCard} className='createList'>Создать список</button>
        </div>
    );
}