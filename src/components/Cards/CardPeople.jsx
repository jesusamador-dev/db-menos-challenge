import React from 'react';

const CardPeople=({ name, gender, age, eye_color, hair_color, isImage, index }) => {
  return (
    <article className="card ">
      <div className="card__header">
        {
          isImage==="true"? (
            <picture>
              <source srcset={`https://picsum.photos/300/200.webp?random=${index}`} />
              <img src={`https://picsum.photos/300/200?random=${index}`} alt="Image of item" />
            </picture>
          ):""
        }
        {
          name? (<h3 className="card__title"> {name} </h3>):""
        }
      </div>
      <div className="card__body">
        {
          gender? (<p className="card__text"> Gender: <span className="card__text-secondary">{gender}</span></p>):""
        }
        {
          age? (<p className="card__text">Age: <span className="card__text-secondary">{age}</span></p>):""
        }
        {
          eye_color? (<p className="card__text">Eye color: <span className="card__text-secondary">{eye_color}</span></p>):""
        }
        {
          hair_color? (<p className="card__text">Hair color: <span className="card__text-secondary">{hair_color}</span></p>):""
        }
      </div>
    </article>
  );
};

export default CardPeople;