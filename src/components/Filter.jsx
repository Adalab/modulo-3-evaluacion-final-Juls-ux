function Filter({ handleFilterMovie, handleFilterYear, years ,handleFilterRemove, filterMovie, filteryear}) {
    
    return (
      <ul className="header__ul">
        <li className="header__li">
          <label className="header__label" htmlFor="movie">Movie</label>
          <input className="header__input" type="text" onInput={handleFilterMovie} value={filterMovie} />
        </li>
  
        <li className="header__li">
        <label className="header__label" htmlFor="year">Year</label>
        <select  className="header__input" onChange={handleFilterYear} value={filteryear}>
          <option value="">All</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        </li>
        <button className="btnDelet" onClick={handleFilterRemove}> Borrar filtros</button>

        
      </ul>
    );
  }
  
  export default Filter;
  
  