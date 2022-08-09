import React from 'react';
import './App.css';
import {Hello1, Hello2, Hello3, Hello4} from "./hello/Hello";
import Wrapper from "./hello/Wrapper";
import Counter from "./hello/Counter";

function App() {
    const name = 'R';
    const style = {
        backgroundColor : 'black',
        color: 'aqua',
        fontSize: 24,
        padding : '1rem'
    }

    return (
        <>
            {/* 주석은 화면에 보이지 않습니다.*/}
            /* 주석은 화면에 보이지 않습니다.*/
            <Hello1 name="react1" color="red"/>
            <Hello2 name="react2" color="red"/>
            <Hello3 name="react3" color="red" isSpecial={true}/>
            <Hello4/>
            <Wrapper>
                <div style={style}>{name}</div>
                <div className="gray-box">안녕히계세요</div>
            </Wrapper>
            <Counter/>
        </>
    );
}

export default App;
