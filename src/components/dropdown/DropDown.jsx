import './dropdown.scss'
import React from 'react'


const DropDown = ({data, setDifficultyChange}) => {


    return (  
        <div className='dropdown'>
            <select onChange={e => setDifficultyChange(e.target.value)} name="" id="">
                {
                    data.map((dt, index) => (
                        <option value={dt} key={index}>{dt}</option>
                    ))
                }
            </select>
        </div>
    );
}
 
export default DropDown;