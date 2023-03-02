import React from 'react';

const Select = ({setSort}) => {
    return (
        <select className="select" onChange={(e) => setSort(e.target.value)}>
            <option className="select__sort" value="" disabled>Сортировать по:</option>
            <option className="select__sort" value="big">К большему:</option>
            <option className="select__sort" value="small">К меньшему:</option>
        </select>
    );
};

export default Select;