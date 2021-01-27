import React from 'react';

const CardVehicle=({ name, description, vehicle_class, length, index, isImage }) => {
const limitString=(string, limit = 100) => {
    return (string.length>limit)? string.slice(0, limit)+"...":string;
  }
   return (
    <article className="card ">
       <div className="card__header">
         {
           isImage==="true"? (
            <picture>
              <source srcset={`https://picsum.photos/300/200.webp?random=${index}`}/>
              <img src={`https://picsum.photos/300/200?random=${index}`} alt="Image of item"/>
            </picture>
           ) : ""
         }
         
        {
          name ? (<h3 className="card__title"> {name} </h3>) : ""
        }
      </div>
      <div className="card__body">
        {
          vehicle_class ? (<p className="card__text-secondary"> Vehicle class: {vehicle_class}</p>) : ""
        }
        {
           description? (<p className="card__text">{ limitString(description) }</p>):""
        }
        
       </div>
        
        {
         length? (
           <div className="card__footer">
             <p className="card__text-secondary">Length: {length}</p>
           </div>):""
        }
    </article>
  );
};

export default CardVehicle;