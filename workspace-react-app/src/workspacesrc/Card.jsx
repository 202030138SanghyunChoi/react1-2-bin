export default function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                // 스타일 설정
                magin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0 0 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {/* 제목 출력 */}
            {title && <h1>{title}</h1>}
            {/* 그 외 모든 props 출력 */}
            {children}
        </div>
    )
}