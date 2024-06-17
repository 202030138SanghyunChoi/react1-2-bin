// [[인라인 If-Else문 / 렌더링의 ? :]]

// State 훅을 사용하므로 useState import.
import { useState } from "react";

// isLoggedIn의 상태에 따라 로그인 상태를 출력하는 조건부 렌더링 Greeting 컴포넌트. props 사용.
function Greeting(props) {
    // props의 isLoggedIn이 true라면.
    if(props.isLoggedIn) {
        // 렌더링
        return (
            // 로그인 중이라고 출력.
            <p>현재 로그인 상태입니다.</p>
        )
    // 그게 아니라면(isLoggedIn이 false라면).
    } else {
        // 렌더링
        return (
            // 로그아웃 중이라고 출력.
            <p>현재 로그아웃 상태입니다.</p>
        )
    }
}

// props를 사용하는 Login 컴포넌트.
function LoginButton(props) {
    // 렌더링.
    return (
        // props의 onClick 함수 호출(handleLoginClick()이 호출).
        <button onClick={props.onClick}>
            로그인
        </button>
    )
}
// props를 사용하는 LogOut 컴포넌트.
function LogoutButton(props) {
    // 렌더링.
    return (
        // props의 onClick 함수 호출(handleLogoutClick()이 호출).
        <button onClick={props.onClick}>
            로그아웃
        </button>
    )
}

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function InLineLoginControl() {
    // State 훅 사용(로그인 상태의 isLoggedIn 변수와 이를 설정하는 setIsLoggedIn 함수). 초기값은 false.
    const [isLoggedIn, setIsLoggedIn ] = useState(false);

    // 로그인 클릭 이벤트를 처리하는 이벤트 핸들러 함수 handleLoginClick().
    const handleLoginClick = () => {
        // 로그인 상태를 true로 설정.
        setIsLoggedIn(true);
    }

    // 로그아웃 클릭 이벤트를 처리하는 이벤트 핸들러 함수 handleLogoutClick().
    const handleLogoutClick = () => {
        // 로그아웃 상태를 false로 설정.
        setIsLoggedIn(false);
    }

    // 렌더링.
    return (
        <div>
            {/* Greeting 컴포넌트를 통해 로그인 상태 출력. props의 값으로 isLoggedIn 변수 전달. */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 삼항연산자를 이용하여 isLoggedIn의 값에 따라. */}
            {/* isLoggedIn이 true라면 LogoutButton 컴포넌트와 props에 handleLogoutClick. */}
            {/* isLoggedIn이 false라면 LoginButton 컴포넌트와 props에 handleLoginClick. */}
            {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
        </div>
    )
}