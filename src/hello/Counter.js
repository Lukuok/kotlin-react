import React, {useState} from "react";

function Counter() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        console.log('+1');
        setNumber(number + 1);
    }

    const onDencrease = () => {
        console.log('-1');
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDencrease}>+1</button>
        </div>
    );
}

export default Counter;