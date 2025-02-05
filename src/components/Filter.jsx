
function Filter() {
    return (
        <>

            <ul className='header__ul'>
                <li className='header__li'>
                    <label className="header__label" htmlFor="">Movie</label>
                    <input className="header__input" type="text" />
                </li>

                <li className='header__li'> <label className="header__label" htmlFor="">Year</label>
                    <input className="header__input" type="text" />
                </li>
            </ul>
        </>
    )
}

export default Filter;