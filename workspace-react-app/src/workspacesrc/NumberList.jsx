export default function NumberList(props) {
    // 리스트 생성
    const numbers = [1, 2, 3, 4, 5];

    // map 함수로 numbers의 요소 number에 넣어 그걸 li로 묶어서 하나씩 listItems에 넣음.
    const listItems = numbers.map((number) =>
        // 키 값으로 숫자 사용
        <li key = {number}>{number}</li>
    )


    // 키 값과 함께 리스트 생성(id 키 값 사용)
    const todos = [
        {id: 1, name: "최상현1"},
        {id: 2, name: "최상현2"},
        {id: 3, name: "최상현3"},
        {id: 4, name: "최상현4"},
        {id: 5, name: "최상현5"}
    ]

    // map 함수로 todos의 요소를 
    const todoItems = todos.map((todo) =>
        <li key = {todos.id}>
            {todo.name}
        </li>
    )


    const indexbox = [1, 2, 3, 4, 5]

    // 리스트 생성(index로 키 값 상용)
    const indexItems = indexbox.map((indexbox, index) => 
        <li key = {index}>
            {indexbox}
        </li>
    )

    // listItems 렌더링
    return (
        <div>
            <ul>{listItems}</ul>
            <ul>{todoItems}</ul>
            <ul>{indexItems}</ul>
        </div>
    )
}