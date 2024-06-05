export default function TemperatureInput(props) {
    // 섭씨와 화씨 변수 생성
    const scaleNames = {
        c: '섭씨',
        f: '화씨'
    }

    // 온도 변경 이벤트 핸들링 함수
    // target은 input을 의미 따라서 event.target.value는 temperature가 됨.
    const handleChange = (event) => {
        // State 끌어올리기 - props의 onTemperatueChange 함수 실행 
        props.onTemperatureChange(event.target.value)
    }   

    return (
        <fieldset>
            {/* props로 전달 받은 화씨섭씨에 따라 출력 */}
            <legend>섭씨 온도를 입력해 주십시오.(단위:{scaleNames[props.scale]})</legend>
            {/* temperature 변수에 저장하고 값이 변경되면 온도 변경 이벤트 핸들링 함수 호출 */}
            {/* State 끌어올리기 - props의 temperature값이 변경되면 props의 temperature를 변경(따라서 이 input이 변경되면 Calculator에서 화씨 temperature와 섭씨 temperature가 같이 바뀜) */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}