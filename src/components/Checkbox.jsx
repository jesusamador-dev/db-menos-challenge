import React, { useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";

const Checkbox=({ name, value, index, oldFilters }) => {
  const [checked, setChecked]=useState(false);
  const { register }=useFormContext();

  useEffect(() => {
    if (oldFilters) {
      oldFilters.forEach(element => {
        if (value===element) {
          setChecked(true);
        }
      });
    }
  }, []);
  
  useEffect(() => {
    setChecked(false);
  }, [name])
  return (
    <div className="form__group">
      <input type="checkbox"
        name="filters[]"
        checked={checked}
        onChange={() => { setChecked(!checked) }}
        value={value}
        className="form__radio"
        id={`check${index}`}
        ref={register({ required: true })}
      />
      <label className="form__label-radio" htmlFor={`check${index}`}>{name}</label>
    </div>
  );
};

export default Checkbox;