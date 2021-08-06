import React from 'react';

const Person = ({ person, remove }) => {
    const removePerson = (person) => {
        const result = window.confirm(`Delete ${person.name} ?`);
        if (result) {
            remove(person.id);
        }
    }
    return (
        <div>
            <p>{person.name} - {person.number} <span>
                <button onClick={() => removePerson(person)} >delete</button>
            </span>
            </p>
        </div >
    )
}

export default Person;