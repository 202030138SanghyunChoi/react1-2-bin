// [[인라인 if / {count &&}]]

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function Counter() {
    // 카운트하는 변수 count. 초기값은 0.
    const count = 0;

    // 렌더링.
    return (
        <div>
            {/* 인라인 if문을 통해 앞의 count 값이 0이라면 Falsy Expression이 되어 뒤의 값은 출력되지 않지만 앞의 count는 FalsyExpression이라 출력됨. */}
            {count && <h1>현재 카운트: {count}</h1>}
        </div>
    )
}