import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'


const Form = ({generateResponse}) => {
    const[ques,setQues] = useState('')
  return (
    <form className='form' onSubmit={(e)=>e.preventDefault()}>
                    <textarea className='textarea' placeholder='Ask Me Anything....' value={ques} onChange={(e)=>setQues(e.target.value)}></textarea>
                    <button className='btn' onClick={()=>generateResponse(ques,setQues)}>
                        <BsSend/>
                    </button>
                </form>
  )
}

export default Form