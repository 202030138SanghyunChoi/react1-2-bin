import React from "react";

// 클래스 뒤에 React.Component 상속
class Hello extends React.Component {
    //class로 만든다면 render()함수 안에 return을 해줘야 함.
    render() {
        return (
            <h1>Hello React</h1>
        )
    }
}

// class 앞에 사용하면 안됐었음.
export default Hello;

/* 만약 jsx로 작성할 경우
export default function Hello() {
    return(
        <h1>Hello</h1>
    )
}
*/