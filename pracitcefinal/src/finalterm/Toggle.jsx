// [[이벤트 핸들러 함수 활용 예제 / handleClick()]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function Toggle() {
    // state 훅 사용(토글 여부의 isToggleOn 변수와 이를 설정하는 함수 setIsToggleOn). 초기값은 true.
    const [ isToggleOn, setIsToggleOn ] = useState(true);

    // 이벤트를 처리하는 함수 handleClick().
    function handleClick() {
        // setIsToggleOn을 이용해 isToggleOn 변수에 NOT 작용을 통해 토글 시키기.
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    // 렌더링.
    return (
        // 버튼 클릭 시 handleClick() 이벤트 핸들러 함수 호출
        <button onClick={handleClick}>
            {/* isToggleOn의 boolean 값에 따라 켜짐 또는 꺼짐 표시 */}
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    )
}