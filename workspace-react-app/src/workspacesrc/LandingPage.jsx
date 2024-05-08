import { useState } from "react";
import Toolbar from "./Toolbar";

export default function LandingPage(props) {
    // State 훅 사용하여 로그인 상태 변수와 설정 함수 선언
    const [isLoggedIn, setIsLoggedIn ] = useState(false);

    // 로그인 핸들링 함수
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    // 로그아웃 핸들링 함수
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            {/* 툴바 컴포넌트의 props는 3개이므로 각각 넣어 출력 */}
            <Toolbar 
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{ padding: 16 }}>리액트 공부</div>
        </div>
    )
}