import './modal.scss'
import React from 'react'


const Modal = ({score, resultData}) => {


    console.log(resultData, 'resultData');

    return ( 
        
        <div className="modal">

            <div className='modal-title'>Skor : {score} / 1000</div>
            
            <div onClick={()=> window.location = "/"} className="modal-btn">Start Again</div>
            <h2 style={{color:"white"}}>Results</h2>
            <div className='result'>
                {
                    resultData?.map((res, i)=> (
                        <div key={i} value={res}>
                            Question {i + 1}: {res ? 'True' : 'False'}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Modal;