import { useParams } from 'react-router-dom';
import './quiz.scss';
import { useEffect, useState } from 'react';
import * as api from "../../api/api"
import QuestionCard from '../../questionCard/QuestionCard';
import Modal from '../../../modal/Modal';
import React from 'react';


const Quiz = () => {

    const {difficulty, amount} = useParams();
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const [resultData, setResultData] = useState([]);

    useEffect(()=> {
        const getData = async() => {
            const data = await api.fetchQuizData(difficulty, amount)
            setQuestionData(data)
        }
        getData();
    },[])

    console.log(questionData, "questionData")
    return (  
        
        <div className='quiz'>
            {
                modal ? <Modal score={score} resultData={resultData}/> :
                <QuestionCard 
                questionData={questionData}
                score = {score}
                setScore={setScore}
                count = {count}
                setCount = {setCount}
                modal= {modal}
                setModal = {setModal}
                resultData = {resultData}
                setResultData={setResultData}
            />

            }
            
        </div>
    );
}
 
export default Quiz;