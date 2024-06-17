// [[리스트 컴포넌트 / listkey 변수들]]

// 내보내기 위해서 export 하고, 메인 컴포넌트 설정을 위해 default.
export default function NumberList() {
    // 리스트 변수 numbers 선언 및 생성.
    const numbers = [1, 2, 3, 4, 5];
    
    const nameNumbers = [
        {id: 1, name: "키값 1"},
        {id: 2, name: "키값 2"},
        {id: 3, name: "키값 3"},
        {id: 4, name: "키값 4"},
        {id: 5, name: "키값 5"}
    ];

    // 아래 3가지 방법은 모두 map() 함수를 이용하여 numbers 배열에 들어있는 숫자의 키값으로 <li></li>를 만드는 방법.
    // 화살표 함수의 number는 각 배열의 인덱스들을 의미하게 됨.

    // 1. 키 값으로 숫자의 값을 사용.
    const listKeyNumber = numbers.map((number) =>
        <li key = {number.toString()}>
            {number}
        </li>    
    )

    // 2. 키 값으로 id를 사용.
    const listKeyid = nameNumbers.map((number) =>
        <li key = {number.id}>
            {number.name}
        </li>
    )

    // 3. 키 값으로 index를 사용.
    // 여기서 index를 화살표 함수의 매개변수로 넣어주지 않으면 문제가 발생.
    const listKeyIndex = nameNumbers.map((number, index) =>
        <li key = {index}>
            {number.name}
        </li>
    )

    // 렌더링.
    return (
        // 각각의 ul의 요소 li를 삽입하게 됨.
        <div>
            <ul>{listKeyNumber}</ul>
            <ul>{listKeyid}</ul>
            <ul>{listKeyIndex}</ul>
        </div>
    )
}