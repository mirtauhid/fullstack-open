import React from 'react'
import Person from './Person'

const Persons = ({ data, remove }) => {
    return (
        <div>
            {
                data.map((d, index) => {
                    return (
                        <Person key={index} person={d} remove={remove} ></Person>
                    )
                })
            }
        </div>
    )
}
export default Persons