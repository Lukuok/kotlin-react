import React from "react";

function Hello1(props) {
    return (<div>안녕하세요 {props.name}</div>);
}

function Hello2({name, color}) {
    return (
        <div>
            안녕하세요 {name},안녕하세요 {color}
        </div>
    );
}

function Hello3({color, name, isSpecial}) {
    return (
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            안녕하세요 {name},
            안녕하세요 {color}
        </div>
    );
}

function Hello4(props) {
    return (
        <div style={{color : props.color}}>
            안녕하세요 {props.name}, 안녕하세요 {props.color}
        </div>
    );
}

Hello4.defaultProps = {
    name : '이름없음',
    color : 'aqua'
}

export {Hello1, Hello2, Hello3, Hello4};