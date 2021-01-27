import React from 'react';

const CardSpecie=({ name, classification, eye_colors, hair_colors, isImage, index }) => {
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
          classification? (<p className="card__text"> Classification: <span className="card__text-secondary">{classification}</span></p>):""
        }
        {
          eye_colors? (<p className="card__text">Eye colors: <span className="card__text-secondary">{eye_colors}</span></p>):""
        }
        {
          hair_colors? (<p className="card__text">Hair colors: <span className="card__text-secondary">{hair_colors}</span></p>):""
        }
      </div>
    </article>
  );
};

export default CardSpecie;