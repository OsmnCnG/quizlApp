import { useState } from 'react';
import DropDown from '../../dropdown/DropDown';
import './introduce.scss'
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg'
const Introduce = () => {

    const difficulty = ["easy", "medium", "hard"];

    const [difficultyChange, setDifficultyChange] = useState("easy");

    const navigate = useNavigate();

    const Total_Questions = 10;

    const startQuiz = () => {
        if(difficulty) {
            navigate(`/quiz/${difficultyChange}/${Total_Questions}`)
        }
    }

    console.log(difficultyChange, "difficultyChange");

    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img src={logo} alt="Logo" />
                <DropDown data = {difficulty} setDifficultyChange= {setDifficultyChange}/>
                <div onClick={startQuiz} className="introduce-btn">Start Quiz</div>
            </div>
        </div>
    );
}
 
export default Introduce