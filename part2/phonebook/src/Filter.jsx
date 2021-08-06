import React from 'react';

const Filter = ({ setSearch }) => {
    return (
        <div>
            filter shown with <input onChange={(event) => setSearch(event.target.value)} />
        </div>
    );
};

export default Filter;