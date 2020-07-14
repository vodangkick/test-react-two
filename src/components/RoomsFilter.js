import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

// get all unique values 
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types 
    let types = getUnique(rooms, 'type');
    console.log(types);
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    })
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <div className="filter-container">
            <Title title="Search rooms" />
            <form className="search-form filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="capacity">
                        Room Type
                    </label>
                    <select name="type" className="control-form" id="type" value={type} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* select people */}
                <div className="form-group">
                    <label htmlFor="capacity">
                        Guests
                    </label>
                    <select name="capacity" className="control-form" id="capacity" value={capacity} onChange={handleChange}>
                        {people}
                    </select>
                </div>

                {/* End select people */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        Room Price ${price}
                    </label>
                    <input
                        type="range"
                        name="price"
                        max={maxPrice}
                        min={minPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control" />

                </div>
                {/* end of room price */}
                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                </div>
                {/* end of room size */}
                {/* extras */}
                <div className="from-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </div>
    )
}
