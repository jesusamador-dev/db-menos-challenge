import React, { useContext, useEffect, useState } from 'react';
import Filters from './Filters';
import { useForm, FormProvider } from 'react-hook-form';
import useFilters from '../hooks/useFilters';
import useItems from '../hooks/useItems';
import ItemsContext from '../context/ItemsContext';

const SearchForm=({ setOpen }) => {
  const methods = useForm();
  const { setItems, setLoading }=useContext(ItemsContext);
  const [check, setCheck]=useState("");
  const [checkImage, setCheckImage]=useState("");
  const filters = useFilters(check);
  const [form, setForm]=useState({ endpoint: "", filters: "", image:"" });
  const items=useItems(form);

  useEffect(() => {
    let oldForm = localStorage.getItem("form");
    if (oldForm) {
      oldForm=JSON.parse(oldForm);
      setCheck(oldForm.endpoint);
      setCheckImage(oldForm.image);
      setLoading(true)
      setForm(oldForm);
    }
  }, []);

  useEffect(() => {
    if (items) {
      setItems(items);
      setLoading(false)
    }
  }, [items])

  const changeRadio=(e) => {
    setCheck(e.target.value);
  }

  const onSubmit=(data) => {
    localStorage.setItem("form", JSON.stringify(data));
    setItems({});
    setLoading(true)
    setForm(data);
    setOpen(false);
  }

  return (
    <FormProvider {...methods} >

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h4 className="form__title">Seleccione el endpoint:</h4>
        <div className="form__container">
          <div className="form__group">
            <input type="radio"
              value="films"
              checked={ check==='films'}
              onChange={changeRadio}
              name="endpoint"
              className="form__radio"
              id="opcion1"
              ref={methods.register({ required: true })}
            />
            <label className="form__label-radio" htmlFor="opcion1">Films</label>
          </div>
          <div className="form__group">
            <input type="radio"
              value="people"
              checked={check==='people'}
              onChange={changeRadio}
              name="endpoint"
              className="form__radio"
              id="opcion2"
              ref={methods.register({ required: true })}
            />
            <label className="form__label-radio" htmlFor="opcion2">People</label>
          </div>
          <div className="form__group">
            <input type="radio"
              value="locations"
              checked={check==='locations'}
              onChange={changeRadio}
              className="form__radio"
              name="endpoint"
              id="opcion3"
              ref={methods.register({ required: true })}
            />
            <label className="form__label-radio" htmlFor="opcion3">Locations</label>
          </div>
          <div className="form__group">
            <input type="radio"
              value="species"
              checked={check==='species'}
              onClick={changeRadio}
              className="form__radio"
              name="endpoint"
              id="opcion4"
              ref={methods.register({ required: true })}
            />
            <label className="form__label-radio" htmlFor="opcion4">Species</label>
          </div>
          <div className="form__group">
            <input type="radio"
              value="vehicles"
              checked={check==='vehicles'}
              onChange={changeRadio}
              className="form__radio"
              name="endpoint"
              id="opcion5"
              ref={methods.register({ required: true })}
            />
            <label className="form__label-radio" htmlFor="opcion5">Vehicles</label>
          </div>
        </div>
        { methods.errors.endpoint&&(
          <p className="form__error">* Este campo es obligatorio</p>
        ) }
        <h4 className="form__title">Imagen:</h4>
        <div className="form__container">
          <div className="form__group">
            <input type="radio"
              name="image"
              value="true"
              checked={checkImage === 'true'}
              onChange={() => { setCheckImage('true') }}
              className="form__radio"
              id="image"
              ref={methods.register({ required: true })} />
            <label className="form__label-radio" htmlFor="image">Sí</label>
          </div>
          <div className="form__group">
            <input type="radio"
              name="image"
              value="false"
              checked={checkImage === 'false'}
              onChange={() => { setCheckImage('false') }}
              className="form__radio"
              id="image2"
              ref={methods.register({ required: true })} />
            <label className="form__label-radio" htmlFor="image2">No</label>
          </div>
        </div>
        { methods.errors.image&&(
          <p className="form__error">* Este campo es obligatorio</p>
        ) }
        <Filters filters={filters} oldFilters={ form.filters }/>
        <button type="submit" className="btn btn-submit">Mostrar</button>
      </form>
    </FormProvider>
  );
};

export default SearchForm;