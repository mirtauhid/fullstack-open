import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => {

    return (
        <div>
            {
                course.map((c, i) => {
                    return (
                        <div key={i} >
                            <Header name={c.name} />
                            <Content parts={c.parts} />
                            <Total parts={c.parts}></Total>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Course