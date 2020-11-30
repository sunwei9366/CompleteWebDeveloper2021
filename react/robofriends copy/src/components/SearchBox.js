import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='pa2'>
        <input 
            className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' 
            type='search' 
            placeholder='search robots'
            onChange={searchChange}></input>

        </div>
    )
}

export default SearchBox;

