import { useState } from "react";

export default function Toggle(props) {
    const [ isToggleOn, setToggle ] = useState(true);

    return (
        <div>
            <button onClick={() => setToggle(isToggleOn ? false : true)}>
                토글
            </button>
            {isToggleOn ? <p>ON</p> : <p>OFF</p>}
        </div>
    )
}