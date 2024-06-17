// [[null을 사용하여 컴포넌트 렌더링 막기 / null]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

// props를 사용하는 WarningBanner 컴포넌트.
function WarningBanner(props) {
    // props의 warning이 true라면. 
    if (props.warning) {
        // 경고라고 렌더링.
        return <p>짜잔</p>
    // 그게 아니라면(props.warning이 false라면).
    } else {
        // null을 사용하여 렌더링 막기.
        return null;
    }
}

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default. 
export default function MainPage() {
    // State 훅 사용(showWarning이라는 경고 여부 변수와 이를 설정하는 함수 setShowWarning). 초기 값은 false.
    const [ showWarning, setShowWarning ] = useState(false);

    // 토글 클릭 이벤트를 처리하는 이벤트 핸들러 함수 handleToggleClick(). 화살표 함수 사용.
    const handleToggleClick = () => {
        // showWarning 값을 NOT 연산 시키기.
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    // 렌더링.
    return (
        <div>
            {/* WarningBanner 컴포넌트와 props의 warning에 showWarning 넣기. */}
            <WarningBanner warning = {showWarning} />
            {/* 버튼 클릭시 handleToggleClick() 이벤트 핸들러 함수 호출. */}
            <button onClick={handleToggleClick}>
                {/* 삼항 연산자를 사용하여 사용 showWaring의 값에 따라 감추기 또는 보이기 표시. */}
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}