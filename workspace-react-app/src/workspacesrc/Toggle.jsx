import { useState } from "react";

export default function Toggle(props) {
    const [ isToggleOn, setToggle ] = useState(true);

    return (
        <button onClick={setToggle(isToggleOn ? false : true)}>
            토글
        </button>
    )
}