import { useState } from "react";

export default function NameForm(props) {
    // 이름을 저장할 String 변수 value랑 setValue 함수 선언
    const [ value, setValue ] = useState('');

    // value 설정 핸들링 이벤트 함수 선언
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // 
    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        // 홈 태그에서 액션 실행 시 새로고침을 방지하는 자바 스크립트 메서드
        event.preventDefault();
    }

    return (
        // form 태그에서 무슨 액션이 발생하면 페이지는 새로 불러오게 됨. 이것을 막는 것이 위의 메서드
        <form onSubmit={handleSubmit} >
            <label>
                이름:
                <input type = "text" value = { value } onChange={handleChange} />
            </label>
            <button type = "submit">제출</button>
        </form>
    )
}