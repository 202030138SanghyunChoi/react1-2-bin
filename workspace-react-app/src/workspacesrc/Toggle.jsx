import { useState } from "react";

export default function Toggle(props) {
    // state 훅 사용
    const [ isToggleOn, setIsToggleOn ] = useState(true);

    // 토글 변경 함수tn
    
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        <button onClick={setToggle(isToggleOn ? false : true)}>
            토글
        </button>
    )
}