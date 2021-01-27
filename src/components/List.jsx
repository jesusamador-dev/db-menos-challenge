import React, { useContext, useEffect, useState } from 'react';
import ItemsContext from '../context/ItemsContext';
import useItems from '../hooks/useItems';
import { CardFilm, CardLocation, CardPeople, CardSpecie, CardVehicle } from './Cards';

const List=() => {
  const { items, isLoading }=useContext(ItemsContext);

  const addCard=() => {
    let cards;
    switch (items.endpoint) {
      case 'films':
        cards=items.map((item, index) => (<CardFilm {...item} isImage={items.isImage} index={index} key={index} />));
        break;
      case 'people':
        cards=items.map((item, index) => (<CardPeople {...item} isImage={items.isImage} index={index} key={index} />));
        break;
      case 'locations':
        cards=items.map((item, index) => (<CardLocation {...item} isImage={items.isImage} index={index} key={index} />));
        break;
      case 'species':
        cards=items.map((item, index) => (<CardSpecie {...item} isImage={items.isImage} index={index} key={index} />));
        break;
      case 'vehicles':
        cards=items.map((item, index) => (<CardVehicle {...item} isImage={items.isImage} index={index} key={index} />));
        break;
      default:
        cards="Información desconocida";
        break;
    }
    return cards;
  }
  return (
    <section className="list">
      {
        items&&items.length>0? addCard():""
      }
      {
        isLoading? (
          <>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
          </>
        ) : ""
      }
    </section>
  );
};

export default List;