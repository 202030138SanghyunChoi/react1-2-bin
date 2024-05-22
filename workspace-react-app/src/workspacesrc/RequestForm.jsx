import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function RequestForm(props) {
    const [ value, setValue ] = useState('요청 사항을 입력하세요.');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 요청 사항: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청 사항:
                <textarea value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}