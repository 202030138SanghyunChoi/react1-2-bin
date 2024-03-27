import React from "react";

// (클래스의 개념) Book 컴포넌트 생성. props는 매개 변수. export default는 다른 jsx 파일에서 import를 가능하게 만듬.
export default function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
        </div>
    );
}