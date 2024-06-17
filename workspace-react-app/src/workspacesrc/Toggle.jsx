// 이벤트 핸들러 함수 활용 예제
import { useState } from "react";

export default function Toggle() {
    // state 훅 사용(토글 여부의 isToggleOn과 이를 설정하는 함수 setIsToggleOn) 초기값은 true
    const [ isToggleOn, setIsToggleOn ] = useState(true);

    // 이벤트 핸들러 함수 설정(토글을 반대로 하는 기능)
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        // 버튼 클릭 시 이벤트 핸들러 함수 호출
        <button onClick={handleClick}>
            {/* isToggleOn의 boolean 값에 따라 켜짐 또는 꺼짐 표시 */}
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    )
}