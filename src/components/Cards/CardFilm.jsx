import React from 'react';

const CardFilm=({ title, description, director, producer, release_date, rt_score, isImage, index }) => {
  const limitString=(string, limit = 100) => {
    return (string.length>limit)? string.slice(0, limit)+"...":string;
  }
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
          title ? (<h3 className="card__title"> {title} </h3>) : ""
        }
        {
          director ? (<p className="card__subtitle"> Director: {director} </p>) : ""
        }
      </div>
      <div className="card__body">
        {
          producer ? (<p className="card__text-secondary"> Producer: {producer} </p>) : ""
        }
        {
          description ? (<p className="card__text"> {limitString(description)}</p>):""
        }
      </div>
      <div className="card__footer">
        {
          rt_score ? (<p className="card__text-secondary"> Rt score: {rt_score} </p>) : ""
        }
        {
          release_date ? (<p className="card__text-secondary">Release date: {release_date} </p>) : ""
        }
      </div>
    </article>
  );
};

export default CardFilm;