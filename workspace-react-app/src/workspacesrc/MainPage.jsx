import { useState } from "react";

export function WarningBanner(props) {
    // warning이 true라면 경고 메시지 출력
    if (props.warning) {
        return <p>경고!!!!</p>
    } else {
        // 그게 아니라면 warning이 false 라면 null로 렌더링 x
        return null;
    }
}

export default function MainPage(props) {
    // State 훅 사용 showWarning이라는 경고 여부 변수와 이를 설정하는 함수 setShowWarning 선언
    const [ showWarning, setShowWarning ] = useState(false);

    // 핸들링 함수 선언(showWarning을 토글 시킴)
    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            {/* WarningBanner 컴포넌트에 showWarning을 넣어 출력 */}
            <WarningBanner warning = {showWarning} />
            {/* 버튼 클릭시 핸들링 함수 실행 */}
            <button onClick={handleToggleClick}>
                {/* 삼항 연산자 사용 */}
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}