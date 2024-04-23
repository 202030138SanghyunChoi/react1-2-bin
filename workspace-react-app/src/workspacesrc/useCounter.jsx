import React, { useState } from "react";

// count라는 이름의 state를 생성하여 카운트, 증가, 감소 관리
export default function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}