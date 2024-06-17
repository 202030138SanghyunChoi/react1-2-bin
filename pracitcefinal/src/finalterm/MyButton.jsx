// [[매개변수가 있는 함수 / handeDelete()]]

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function MyButton() {
    // 화살표 함수를 사용한 매개변수 id와 event가 있는 이벤트 핸들러 함수.
    const handleDelete = (id, event) => {
        // id 와 event의 target(event가 일어난 태그)을 콘솔에 출력.
        console.log(id, event.target)
    }

    // 렌더링.
    return(
        // 버튼 클릭시 handleDelete() 이벤트 핸들러 함수를 id=1, event=event의 Argument로 호출.
        <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>
    )
}