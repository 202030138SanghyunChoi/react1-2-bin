import React from "react";

export default function Clock() {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    // 세미콜론 필요한가? app.js만을 건드려서 tick을 줄 순 없나
}