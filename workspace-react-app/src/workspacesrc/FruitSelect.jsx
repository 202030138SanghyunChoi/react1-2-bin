import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function FruitSelect(props) {
    const [ value, setValue ] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일 선택:
                <select value = {value} onChange={handleChange}>
                    <option value = "사과">사과</option>
                    <option value = "바나나">바나나</option>
                    <option value = "오렌지">오렌지</option>
                </select>
                <button type="submit">제출</button>
            </label>
        </form>
    )
}