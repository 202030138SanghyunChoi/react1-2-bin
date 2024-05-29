import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict.jsx";

export default function Calculator(props) {
    // 온도 설정 state 훅 생성
    const [temperature, setTemperature] = useState('');

    // 온도 변경 이벤트 핸들링 함수
    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        // 사용자가 값을 변경할 때마다 즉시 BoilingVerdict의 props에 반영되어 출력
        <fieldset>
            <legend>섭씨 온도를 입력하세요.</legend>
            {/* onChange를 통해 값이 변경될때마다 위의 이벤트 핸들링 함수 호출 */}
            <input value={temperature} onChange={handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    )
}