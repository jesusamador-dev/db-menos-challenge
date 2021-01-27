import React from 'react';

const CardLocation = ({ name, climate, terrain, surface_water, isImage, index }) => {

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
          name ? (<h3 className="card__title"> {name} </h3>) : ""
        }
      </div>
      <div className="card__body">
        {
          climate ? (<p className="card__text"> Climate: <span className="card__text-secondary">{climate}</span></p>) : ""
        }
        {
          terrain ? (<p className="card__text">Terrain: <span className="card__text-secondary">{terrain}</span></p>):""
        }
      </div>
      <div className="card__footer">
        {
          surface_water ? (<p className="card__text-secondary"> Surface water: {surface_water}</p>) : ""
        }
      </div>
    </article>
  );
};

export default CardLocation;