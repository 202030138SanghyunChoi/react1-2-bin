import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function RequestForm(props) {
    // 요청 사항 state 훅 생성
    const [ value, setValue ] = useState("");

    // value를 변경할 이벤트 핸들링 함수 생성
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // 제출 이벤트 핸들링 함수 생성
    const handleSubmit = (event) => {
        alert('입력한 요청 사항: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청 사항:
                {/* textarea 사용 */}
                <textarea value={value} onChange={handleChange} placeholder="요청 사항을 입력하시오."/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}