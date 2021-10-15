import React, { useState, useEffect } from 'react'
import Message from './Message'

const Questionpage = () => {

    const labels = document.querySelectorAll('.form-control label')
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    })



    const [question, setQuest] = useState('');
    const [answer, setAnswer] = useState('');
    const [useranswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState(null)
    const [check, setCheck] = useState()
    const [sever, setSever] = useState()


    const submitHandler = (e) => {

        e.preventDefault()
        if (useranswer !== answer) {
            setCheck(false)
            setMessage('Answer is incorrect')
            setSever('error')

        }
        else {
            setCheck(true)
            setMessage('Answer is correct')
            setSever('success')

        }
    }
    const getanotherquestion = (e) => {
        e.preventDefault()
        generateQuestion()
        setCheck()
        setUserAnswer('');
    }
    async function generateQuestion() {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }

        const res = await fetch('https://jservice.io/api/random', config)

        const data = await res.json()
        const answer = data[0].answer;


        const ques = data[0].question;

        setQuest(ques);
        setAnswer(answer);

    }
    useEffect(() => {
        generateQuestion()

    }, [])



    return (
        <div>
            <div className="container">
                <h3>Answer the question</h3>
                {check === true && <Message severity='success'>{message}</Message>}
                {check === false && <Message severity='error'>{message}</Message>}
                <div id="question" className="question"> {question}</div>
                <div></div>

                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <input value={useranswer} onChange={(e) => setUserAnswer(e.target.value)} name="answer" type="text" />
                        <label>Answer</label>
                        <button className="btn" type="submit">Check</button>
                    </div>
                </form>

            </div>

            <button id="questionbtn" className="btn" onClick={getanotherquestion}>Get Another question</button>

        </div>


    )
}

export default Questionpage
