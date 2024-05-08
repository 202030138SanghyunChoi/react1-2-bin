// 스타일 시트
const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    }
};

// 메인 컴포넌트
export default function Toolbar(props) {
    // props를 3가지로 나눔.
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        // 스타일 시트 지정
        <div style = {styles.wrapper}>
            {/* &&연산자를 사용하여 isLoggedIn이 false면 출력안함 */}
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {/* 삼항연산자를 사용하여 LoggedIn이 true면 로그아웃 버튼이 나오게, false면 로그인 버튼이 나오도록 출력 */}
            {isLoggedIn ? (
                <button onClick = {onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
                )}
        </div>
    )
}