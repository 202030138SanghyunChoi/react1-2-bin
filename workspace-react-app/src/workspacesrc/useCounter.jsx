import React, { useState } from "react";

// useCounter(커스텀 훅)를 생성하여 카운트, 증가, 감소 관리(initialValue로 초기값 사용)
export default function useCounter(initialValue) {
    // 카운트 회수 변수와 카운트 수 변경 함수 생성(State훅 사용)
    const [count, setCount] = useState(initialValue);

    // 증가 함수
    const increaseCount = () => setCount((count) => count + 1);
    // 감소 함수 Math 함수 사용 Math.max(액션, 최소값)
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    // 카운트 회수 변수, 증가 함수, 감소 함수 리턴
    return [count, increaseCount, decreaseCount];
}