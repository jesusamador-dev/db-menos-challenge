import React, { useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";
import Checkbox from './Checkbox';

const Filters=({ filters, oldFilters}) => {

  const { errors }=useFormContext();
  
  return (
    filters&&filters.length>0? (
      <>
        <h4 className="form__title">Campos a mostrar:</h4>
        
        <div className="form__container">
          {
            filters.map((el, index) => {
              return (
                <Checkbox {...el} index={index} oldFilters={oldFilters} key={index} />
              )
            })
          }
        </div>
        { errors.filters&&(
        <p className="form__error">* Este campo es obligatorio</p>
      ) }
      </>
    ):""
  );
};

export default Filters;