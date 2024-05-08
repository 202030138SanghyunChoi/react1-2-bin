import { useState } from "react";

export default function Toggle(props) {
    // state 훅 사용
    const [ isToggleOn, setIsToggleOn ] = useState(true);

    // 토글 핸들링 함수    
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        // 버튼 클릭시 토글 핸들링 함수 실행
        <button onClick={handleClick}>
            {/* isToggleOn에 따라 켜짐 또는 꺼짐 표시 */}
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    )
}