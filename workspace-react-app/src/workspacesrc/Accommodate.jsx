// useEffect, useState 훅 사용
import { useEffect, useState } from "react";
// 커스텀 훅 import
import useCounter from "./useCounter";

// 최대 인원 수 10명 설정
const MAX_CAPACITY = 10;

export default function Accomodate(props) {
    // State 훅 사용(가득 참을 설정해주는 isFull)
    const [isFull, setIsFull] = useState(false);
    // 커스텀 훅 사용(카운트 체크 해주는 count, 증가 함수 increaseCount, 감소 함수 decreaseCount와 초기값 0)
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 의존성 배열이 없는 useEffect() 훅
    // 컴포넌트가 마운트된 직후에 호출되며 이후 컴포넌트가 업데이트 될 때마다 호출
    useEffect(() => {
        console.log("================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    })

    // 의존성 배열이 있는 useEffect() 훅
    // 컴포넌트가 마운트된 직후에 호출 후 count 값이 바뀐다면 호출 
    useEffect(() => {
        // 안의 내용이 맞다면 true로 아니면 false로 들어옴
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style = {{ padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
    
            {/* 클릭하면 increaseCount, 가득차면 클릭 금지 */}
            <button onClick={increaseCount} disabled = {isFull}>
                입장
            </button>
            {/* 클릭하면 decreaseCount */}
            <button onClick={decreaseCount}>
                퇴장
            </button>
            {/* 가득차면 보여주기,
                삼항 연산자 - 조건절 ? true : false(true면 true, false면 false 실행)
                또는 - 조건절 && gogo(true면 gogo 실행 아니면 아무것도 하지 않기)
            */}
            {isFull && <p style = {{ color: "red" }}>정원이 가득 찼습니다.</p>}
        </div>
    )
}