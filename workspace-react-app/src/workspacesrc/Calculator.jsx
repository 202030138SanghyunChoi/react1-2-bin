// 좋은 예제는 아니지만 만약 State 끌어올리기를 사용한다면 여러개의 컴포넌트에서 동일한 State훅을 사용한다면 이 방식과 같이 사용할 수 있다.
// 그리고 말이 State 끌어올리기이지, 사실상 props를 통해 함수나 변수를 전달해서 쓰는 거임;

import { useState } from "react";
import TemperatureInput from "./TemperatureInput.jsx";

export default function Calculator(props) {
    // 온도 설정 Hook
    const [temperature, setTemperature] = useState('');
    // 섭씨 화씨 설정 Hook
    const [scale, setScale] = useState('c');

    // 섭씨 온도 설정 핸들러(temperature값을 설정하고, scale을 섭씨로)
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    // 화씨 온도 설정 핸들러(temperature값을 설정하고, scale을 화씨로)
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    // celsius 변수 생성 (만약에 화씨면 섭씨로 변경하여 저장)
    const celsius = (scale === 'f' ? tryConvert(temperature, toCelsius) : temperature);
    // fahrenheit 변수 생성 (만약에 섭씨면 화씨로 변경하여 저장)
    const fahrenheit = (scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature);

    return (
        <div>
            {/* 각 props에 섭씨와 화씨와@@그에 맞는 temperature 변수를 넣고@@그에 맞는 handle 함수를 props에 넣어 컴포넌트 실행 */}
            <TemperatureInput
                scale = 'c'
                temperature={celsius}
                // handleCelsiusChange 함수가 props의 onTemperatueChange로 그대로 전달
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale = 'f'
                temperature={fahrenheit}
                // handleFahrentheitChange 함수가 props의 onTemperatueChange로 그대로 전달
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

// 물이 섭씨 기준 100도 이상인지 파악
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// 화씨 온도 > 섭씨 온도
function toCelsius(fahrenheit) {
    return (
        (fahrenheit - 32) * 1.8
    )
}

// 섭씨 온도 > 화씨 온도
function toFahrenheit(celsius) {
    return (
        (celsius / 1.8) + 32
    )
}

// convert 매개변수에는 함수가 들어간다.
function tryConvert(temperature, convert) {
    // input 함수에 temperature 문자열을 숫자로 변환(문자만 있으면 NaN이 됨)
    const input = parseFloat(temperature);

    // input이 NaN을 반환하면 아무것도 반환하지 않기
    if (Number.isNaN(input)) {
        return '';
    }

    // output 변수에는 convert로 입력받은 함수를 적용한다.
    const output = convert(input);
    // output을 1000으로 나눈 값을 Math.round(반올림 함수) 시킨 후 다시 1000으로 나눈다.(반올림 기능)
    const rounded = Math.round(output * 1000) / 1000;
    // rounded 변수를 문자열로 출력
    return rounded.toString();
}