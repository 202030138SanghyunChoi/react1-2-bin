// [[여러 개의 입력 다루기 / 각각의 State훅과 onChange]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function Reservation() {
    // State 훅 사용(아침 식사 여부 변수의 haveBreakfast와 이를 설정하는 setHaveBreakfast함수). 초기 값은 true.
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    // State 훅 사용(손님 수의 변수 numberOfGuest와 이를 설정하는 setNumberOfGuest 함수). 초기 값은 2.
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    // form 태그 제출하는 이벤트를 처리하는 이벤트 핸들러 함수 handleSubmit().
    const handleSubmit= (event) => {
        // 웹 브라우저에 haveBreakfast 변수와 numberOfGuset 변수 출력.
        alert(`아침 식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        // form 태그 제출 시 새로고침 되는 것을 막는 메서드.
        event.preventDefault();
    }

    // 렌더링.
    return (
        // 폼 태그 제출 시 handleSubmit() 이벤트 핸들러 함수 호출.
        <form onSubmit={handleSubmit}>
            <label>
                아침 식사 여부:
                {/* input 태그의 값이 변경되면 각각의 State 훅 함수로 값 설정. */}
                <input
                    type="checkbox"
                    checked="{haveBreakfast}"
                    onChange={(event) => {
                        setHaveBreakfast(event.target.value=checked);
                    }} />
            </label>
            <br/>
            <label>
                방문객 수:
                <input
                    type="number"
                    value={numberOfGuest}
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }} />
            </label>
            {/* 제출 버튼. */}
            <button type="submit">제출</button>
        </form>
    )
}