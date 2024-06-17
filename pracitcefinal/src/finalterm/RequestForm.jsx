// [[textarea 태그 / textarea]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function RequestForm() {
    // State 훅 사용.(요청 사항을 설정하는 변수 value와 이 값을 설정하는 setValue). 초기 값은 ''.
    const [ value, setValue ] = useState("");

    // textarea 값이 변경되는 이벤트를 처리하는 이벤트 핸들러 함수 handleChange().
    const handleChange = (event) => {
        // 이벤트가 발생한 태그의 value 값을 value 변수의 값으로 설정.(textarea의 value 값).
        setValue(event.target.value);
    }

    // form 태그가 제출되는 이벤트를 처리하는 이벤트 핸들러 함수 handleSubmit().
    const handleSubmit = (event) => {
        // 웹 브라우저 알림창에 value 변수 값을 출력.
        alert('입력한 요청 사항: ' + value);
        // form 태그 제출 시 새로고침을 막는 메서드.
        event.preventDefault();
    }

    // 렌더링.
    return (
        // form태그 제출 시 handleSubmit() 이벤트 핸들러 함수 호출.
        <form onSubmit={handleSubmit}>
            <label>
                요청 사항:
                {/* textarea 사용. 값이 변경될 경우 handleChange() 이벤트 핸들러 함수 호출. */}
                <textarea value={value} onChange={handleChange} placeholder="요청 사항을 입력하시오."/>
            </label>
            {/* 제출 버튼. */}
            <button type="submit">제출</button>
        </form>
    )
}