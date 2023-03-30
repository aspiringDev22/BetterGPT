import React from 'react'

const Chatsection = ({storedVal}) => {
  return (
   <div className='chat-wrapper'>
        {storedVal.map((val,index)=>{
            return(
                <div className="chat-container" key={index}>
                <div className="chat-section" >
                <p className="question"><span className="ques">Ques.</span> {val.question}</p>
                <p className="answer"><span className="ans">Ans.</span> {val.answer}</p>
            </div>
            </div>
            )
        })}
 </div>
  )
}

export default Chatsection