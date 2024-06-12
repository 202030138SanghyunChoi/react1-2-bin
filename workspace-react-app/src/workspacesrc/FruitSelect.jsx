import { useState } from "react";

export default function FruitSelect(props) {
    // value를 관리하는 state 훅 생성
    const [ value, setValue ] = useState();

    // value 값을 수정하는 이벤트 핸들링 함수 생성
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // 제출 시 알림창 띄우고 갱신 방지 메서드를 실행하는 제출 이벤트 핸들링 함수 생성
    const handleSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* select 태그 사용 */}
                과일 선택:
                <select value = {value} onChange={handleChange}>
                    <option value = "사과">사과</option>
                    <option value = "바나나">바나나</option>
                    <option value = "오렌지">오렌지</option>
                </select>
                <button type="submit">제출</button>
            </label>
        </form>
    )
}