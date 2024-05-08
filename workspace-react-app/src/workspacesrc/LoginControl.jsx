import { useState } from "react";

// 로그인 버튼과 로그아웃 버튼 컴포넌트 로그인, 로그아웃만 다를 뿐 각각 props의 onClick을 가져온다.
export function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    )
}
export function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    )
}

// isLoggedIn의 상태에 따라 표시
export function Greeting(props) {
    if(props.isLoggedIn) {
        return (
            <p>현재 로그인 상태입니다.</p>
        )
    } else {
        return (
            <p>현재 로그아웃 상태입니다.</p>
        )
    }
}

// 메인 컴포넌트
export default function LoginControl(props) {
    // State 훅 사용, 로그인 상태 변수 isLoggedIn과 설정 함수 setIsLoggedIn
    const [isLoggedIn, setIsLoggedIn ] = useState(false);

    // 로그인 상태를 true로 변경하는 로그인 클릭 핸들링 함수
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    // 로그인 상태를 false로 변경하는 로그아웃 클릭 핸들링 함수
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // 엘리먼트 변수 button 생성
    let button;

    // 로그인 상태라면
    if (isLoggedIn) {
        // 로그 아웃 컴포넌트에 로그아웃 핸들링 함수를 넣어 button에 전달
        button = <LogoutButton onClick={handleLogoutClick} />
    } else {
        // 그 반대 상황인 로그아웃 상태라면
        // 로그인 컴포넌트에 로그인 핸들링 함수를 넣어 button에 전달
        button = <LoginButton onClick={handleLoginClick} />
    }

    return (
        <div>
            {/* Greeting 컴포넌트에 isLoggedIn을 담아 출력 */}
            <Greeting isLoggedIn={isLoggedIn} />
            {/* button 변수(로그아웃 또는 로그인 컴포넌트가 담겨있음) */}
            {button}
        </div>
    )
}