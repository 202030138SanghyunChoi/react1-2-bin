export default function MyButton(props) {
    // 매개변수가 있는 함수 생성
    const handleDelete = (id, event) => {
        console.log(id, event.target)
    }

    return(
        // 위 함수 사용
        <button onClick={(event) =>handleDelete(1, event)}>삭제하기</button>
    )
}