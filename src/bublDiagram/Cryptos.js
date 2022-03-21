import React from 'react';
import './Cryptos.css';

const Cryptos = (props) => {
    let questions = Object.keys(props.slices).map((questionKey, i) => (
        <li key={i}>
            <p>{props.slices[questionKey].crypto}</p>
            <div className="Answer">
                <input
                onChange={props.selectScore(questionKey)} 
                type="range" 
                min="1" 
                max="10" 
                value={props.slices[questionKey].transform === '1' ? '10' : props.slices[questionKey].transform.replace('0.','')} 
                className="rangeInput"
                style={{background: props.slices[questionKey].fill}} />
                <span className="Score" style={{backgroundColor: props.slices[questionKey].fill}}>
                    <div className="leftArrow" style={{borderRight: '5px solid ' + props.slices[questionKey].fill}}></div>
                    {props.slices[questionKey].transform === '1' ? '10' : props.slices[questionKey].transform.replace('0.','')}
                </span>
            </div>
        </li>
    ));
    return (
        <div className='containtment'>
            {questions}
        </div>
    );
}

export default Cryptos;

