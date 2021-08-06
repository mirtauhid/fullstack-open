import React from 'react';

const Statistic = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: '55px' }} >{props.text}</td>
                        <td>{props.value}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Statistics = (props) => {
    return (
        <div>
            <Statistic text="good" value={props.good} ></Statistic>
            <Statistic text="neutral" value={props.neutral} ></Statistic>
            <Statistic text="bad" value={props.bad} ></Statistic>
            <Statistic text="all" value={props.all} ></Statistic>
            {
                (!isNaN(props.average)) ? <Statistic text="average" value={props.average} ></Statistic> : <Statistic text="average" value={0} ></Statistic>
            }
            {
                (!isNaN(props.positive)) ? <Statistic text="positive" value={props.positive} ></Statistic> : <Statistic text="positive" value={0}></Statistic>
            }
        </div>
    )
}

export default Statistics;