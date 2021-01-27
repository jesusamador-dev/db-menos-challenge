import React, { useState } from 'react';
import List from '../components/List';
import SearchForm from '../components/SearchForm';
import ItemsContext from '../context/ItemsContext';

const Home=() => {
  const [items, setItems]=useState("");
  const [isLoading, setLoading]=useState(false);
  const value = {items, setItems, isLoading, setLoading}; 
  const [isOpen, setOpen]=useState(false);

  return (
    <main className="home">
      <div className="filters-bar">
        <button className="btn filters-button" onClick={() => { setOpen(!isOpen) }}>
          <i className="icon-filter"></i>  Filtros
        </button>
      </div>
      <ItemsContext.Provider value={value}>
        <aside className={`sidebar ${isOpen? 'sidebar-open':""}`}>
          <button className="btn btn-close" onClick={() => { setOpen(!isOpen) }}> <i className="icon-close"></i></button>
          <section className="search">
            <SearchForm />
          </section>
        </aside>
        <List />
      </ItemsContext.Provider>
    </main>
  );
};

export default Home;