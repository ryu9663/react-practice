import React, { useState , useEffect } from 'react';
import Memo from './Memo';
import DummyMemo from './DummyMemo';

function Checkbox(){
    const [typeOfMemo,setTypeOfMemo] = useState('all')
    const filteredMemo = DummyMemo.filter(i =>{return i.priority===1})

    function handleClick(event){
        setTypeOfMemo(event.target.value)
    }

return (
<div>
    <div className = 'checkbox'>
        <label>
            <input type = 'radio' name = 'checkbox' value = 'all' onClick ={handleClick}/>전체 메모 조회
        </label>
        <label>
            <input type = 'radio' name = 'checkbox' value = 'special' onClick = {handleClick}/>중요 메모 조회
        </label>
    </div>    
    
    <div className = 'list'>
     {typeOfMemo ==='all' ? 
     DummyMemo.map(i => {return (
       <div key = {i.id}>
            <Memo memo = {i}/>
       </div>
     )}) :
     filteredMemo.map(i => {return (
        <div key = {i.id}>
             <Memo memo = {i}/>
        </div>
     )})}
    
    </div>
    
</div>
)
}


export default Checkbox;







