import React, { useEffect, useState } from 'react'
import {Configuration,OpenAIApi} from 'openai'
import './App.css'
import Chatsection from './components/Chatsection'
import Form from './components/Form'

const App = () => {
    const [storedVal,setStoredVal] = useState([])

    const configuration = new Configuration({
        apiKey:"Enter API KEY",
        // apiKey:process.env.REACT_APP_OPENAI_API_KEY,
    })
    const openai = new OpenAIApi(configuration);
  
    const generateResponse=async(ques,setQues)=>{
        if(ques===''){
            return;
        }
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };
        let completeOptions = {
            ...options,
            prompt:ques,
        }
        const response = await openai.createCompletion(completeOptions);
        // console.log(response.data.choices[0].text)
        if(response.data.choices){
            setStoredVal([
                {
                    question: ques,
                    answer: response.data.choices[0].text,
                },
                ...storedVal
            ])
            setQues('')
        }
    }

    return (
        <div className='App'>
            <nav>BetterGPT</nav>
            <div className="app-container">
            <div className="header-section">
				<h1>ChatGPT CLONE 🤖</h1>
				{storedVal.length < 1 && (
					<h3>
						I am an automated question and answer system, designed to assist you
						in finding relevant information. You are welcome to ask me any
						queries you may have, and I will do my utmost to offer you a
						reliable response. Kindly keep in mind that I am a machine and
						operate solely based on programmed algorithms.
					</h3>
				)}
			</div>
             <Chatsection storedVal={storedVal}/>
                <Form generateResponse={generateResponse}/>
            </div>
        </div>
    )
}

export default App
