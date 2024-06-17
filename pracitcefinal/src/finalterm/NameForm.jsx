// [[Form과 제어 컴포넌트 / form의 onSubmit와 onChange]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function NameForm() {
    // State 훅 사용(이름을 설정할 value 변수와 이를 설정할 setValue함수). 초기값은 ''.
    const [ value, setValue ] = useState('');

    // form태그 안의 input 태그의 값이 변경될 때 발생하는 이벤트를 처리하는 이벤트 핸들러 함수 handleChange().
    const handleChange = (event) => {
        // event의 객체의 value 값을 value 변수 값으로 설정(input 태그의 value 값).
        setValue(event.target.value);
    }

    // form이 제출될 때 발생하는 이벤트를 처리하는 이벤트 핸들러 함수 handleSubmit().
    const handleSubmit = (event) => {
        // 웹 브라우저의 알림창에 value 변수 출력.
        alert('입력한 이름: ' + value);
        // form 태그에서 제출 시 자동으로 새로고침을 해주는 데 그것을 막아주는 메서드이다.
        event.preventDefault();
    }

    // 렌더링.
    return (
        // 폼을 제출 시 handelSubmit() 이벤트 핸들러 함수 호출.
        <form onSubmit={handleSubmit} >
            <label>
                이름:
                {/* 값이 변경되면 handleChange() 이벤트 핸들러 함수 호출. */}
                <input type = "text" value = { value } onChange={handleChange} />
            </label>
            {/* 제출 버튼. */}
            <button type = "submit">제출</button>
        </form>
    )
}