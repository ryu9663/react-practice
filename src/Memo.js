import React, { useState , useEffect } from 'react';
import './Memo.css';
import DummyMemo from './DummyMemo';
function Memo({memo}){
    

return (
<div className = 'box_frame'>
    <div className = 'box'>
        <div className = 'littleTitle'>
            <span>{memo.id}</span>
            <span>{memo.priority===1 ? '중요':'일반'}</span>
        </div>
    
        <div>
            {memo.content}
        </div>
    </div>
</div>
)
}


export default Memo;