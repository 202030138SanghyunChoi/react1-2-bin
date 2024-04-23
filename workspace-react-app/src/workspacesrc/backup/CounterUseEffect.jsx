import React, { useEffect, useState } from "react";

export default function CounterUseEffect(props) {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `제목 - 총 ${count}번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    )
}