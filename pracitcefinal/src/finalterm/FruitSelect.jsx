// [[select 태그 사용 / select 태그]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

export default function FruitSelect(props) {
    // State 훅 사용(과일을 의미하는 변수 value와 이를 설정하는 setValue 함수). 초기값은 없음.
    const [ value, setValue ] = useState();

    // select 태그의 값이 변경되는 이벤트를 처리하는 이벤트 핸들러 함수 handleChange().
    const handleChange = (event) => {
        // event가 일어난 태그의 value 값을 value 변수의 값으로 설정(select태그의 value).
        setValue(event.target.value);
    }

    // form 태그 제출하는 이벤트를 처리하는 이벤트 핸들러 함수 handleSumbit().
    const handleSubmit = (event) => {
        // 웹 브라우저 알림창에 value 변수의 값을 출력.
        alert('선택한 과일: ' + value);
        // form 태그 제출 시 새로고침되는 것을 막는 메서드.
        event.preventDefault();
    }

    // 렌더링.
    return (
        // form태그 제출 시 handleSubmit() 이벤트 핸들러 함수 호출.
        <form onSubmit={handleSubmit}>
            <label>
                {/* select 태그 사용. */}
                과일 선택:
                {/* 값이 변경될 경우 handleChange 이벤트 핸들러 함수 호출. multiple로 다중 선택 가능(대신 그러면 value가 배열이거나 그래야겠지?). */}
                <select value = {value} onChange={handleChange}>
                    <option value = "사과">사과</option>
                    <option value = "바나나">바나나</option>
                    <option value = "오렌지">오렌지</option>
                </select>
                {/* 제출 버튼. */}
                <button type="submit">제출</button>
            </label>
        </form>
    )
}