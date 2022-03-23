import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemStyle.css';

function Item({ nombre, thumbnail, precio, id, stock }) {
    const onAdd = (qty) => {
        alert(`Has agregado ${qty} botellas de Gin`);
    };

    return (
        <article className="product-card">
            <img className="product-card__image" src={thumbnail} alt="" />

            <h3 className="product-card__name">{nombre}</h3>
            <span className="product-card__name">${precio}</span>

            <ItemCount stock={stock} onAdd={onAdd} initial={1} />
        </article>
    );
}

export default Item;