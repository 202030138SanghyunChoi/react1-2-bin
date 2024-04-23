import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

// 최대 인원 수
const MAX_CAPACITY = 10;

export default function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
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
    // count가 MAX_CAPACITY보다 크거나 같다면 IsFull을 설정 
    useEffect(() => {
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
            <button onClick={decreaseCount}>퇴장</button>
    
            {/* 가득차면 보여주기 */}
            {isFull && <p style = {{ color: "red" }}>정원이 가득 찼습니다.</p>}
        </div>
    )
}