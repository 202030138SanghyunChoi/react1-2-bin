import React, {useState} from "react";

export default function Counter(props) {
    const [count, setCount] = useState(20);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    )
}