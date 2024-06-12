import { useState } from "react";

export default function SignUp() {
    // 이름 useState 훅 생성
    const [ name, setName ] = useState("");
    // 성별 useState 훅 생성
    const [ gender, setGender ] = useState("남자");
    // 밥 먹었냐 useState 훅 생성
    const [ haveBreakfast, setHaveBreakfast ] = useState(true);

    // 이름 설정하는 이벤트 핸들링 함수 생성
    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    // 성별 설정하는 이벤트 핸들링 함수 생성
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    // 아침 식사 여부를 결정하는 이벤트 핸들링 함수 생성. 여기서는 체크 박스이므로 value가 아닌 checked로 넣어준다.
    const handleChangeHaveBreakfast = (event) => {
        setHaveBreakfast(event.target.checked);
    }

    // 제출할 때 알림창과 갱신 막기 메서드를 수행하는 제출 이벤트 핸들링 함수 생성
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별" ${gender}, 아침식사 여부: ${haveBreakfast}`);
        event.preventDefault();
    }

    return (
        // 제출 버튼을 누르면 제출 이벤트 핸들링 함수 호출
        <form onSubmit={handleSubmit}>
            <label>
                {/* 렌더링 되는 부분 */}
                이름:
                {/* 이름 쓰는 input 태그 생성. 값은 name으로 */}
                <input type="text" value={name} onChange={handleChangeName} placeholder="이름을 입력해 주십시오." />
            </label>
            <br/>
            <label>
                성별: <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <label>
                {/* 체크 박스 인풋 태그 사용 */}
                아침식사 여부:
                <input type="checkbox"
                checked={haveBreakfast}
                onChange={handleChangeHaveBreakfast} />
            </label>

            {/* 제출 버튼 */}
            <button type="submit">제출</button>
        </form>
    )
}