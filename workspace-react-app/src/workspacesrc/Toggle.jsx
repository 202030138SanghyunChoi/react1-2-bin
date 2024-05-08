import { useState } from "react";

export default function Toggle(props) {
    // state 훅 사용
    const [ isToggleOn, setIsToggleOn ] = useState(true);

    // 토글 변경 함수
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        <div>
            {/* 토글 상태에 따라 켜짐, 꺼짐으로 표시 */}
            <p>{isToggleOn ? "켜짐" : "꺼짐" }</p>
            {/* 버튼 클릭시 토글 변경 함수 실행 */}
            <button onClick={handleClick}>토글</button>
        </div>
    )
}