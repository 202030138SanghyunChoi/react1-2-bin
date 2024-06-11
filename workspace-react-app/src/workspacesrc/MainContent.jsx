import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function MainContent() {
    // ThemeContext를 useContext 훅으로 theme과 toggleTheme 설정
    const { theme , toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                // theme == "light" 가 true면 white, false면 black 값 대입
                backgroundColor: (theme === "light") ? "white" : "black",
                // 백그라운드랑 반대로 적용
                color: (theme === "light") ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            {/* 컨텍스트의 toggleTheme 함수를 클릭 이벤트에서 호출 */}
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    )
}