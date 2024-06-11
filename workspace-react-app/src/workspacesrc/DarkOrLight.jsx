import { useCallback, useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";

export default function DarkOrLight() {
    // theme 변수 생성(초기값 light)
    const [ theme, setTheme ] = useState("light");

    // toggleTheme 함수 생성. 왜 콜백?????????????????????????????????
    const toggleTheme = useCallback(() => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        // Main컨텐트를 컨텍스트 Provider로 감싸서 theme값과 toggleTheme 함수를 컨텍스트 설정해서 메인 컨텐트 렌더링
        <ThemeContext.Provider value ={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    )
}