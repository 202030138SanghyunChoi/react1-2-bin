import React from "react";

export default function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

/*
    index.js에서

    setInterval(() => {
      root.render(
      <React.StrictMode>
       <Clock />
      </React.StrictMode>
      );
    })

    으로 설정해야함.
*/