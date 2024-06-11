import React from "react";

// 컨텍스트 변수 생성
const ThemeContext = React.createContext('light');

export default function ContextApp() {
    // Provider로 값을 설정
    <ThemeContext.Provider value="dark">
        <Toolbar />
    </ThemeContext.Provider>
}

function Toolbar() {
    return(
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    // Consumer로 가장 가까운 상위 테마 Provider를 찾아 해당되는 값을 사용
    <ThemeContext.Consumer>
        {/* {value => <Button theme={value} />} */}
    </ThemeContext.Consumer>
}