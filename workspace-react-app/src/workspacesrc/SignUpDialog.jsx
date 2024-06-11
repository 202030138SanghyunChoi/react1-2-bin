import { useState } from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
            {props.title}
        </h1>
        <p className="Dialog-mssage">
            {props.message}
        </p>
        </FancyBorder>
    )
}

export default function SignUpDialog() {
    // 닉네임 변수 생성
    const [nickname, setNickname] = useState('');

    // 닉네임 설정 핸들링 함수 생성
    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    // 로그인 알림창 출력 핸들링 함수
    const handleSignUp = () => {
        alert(`어서 오세요, ${nickname}님!`);
    }

    return (
        // Dialog 컴포넌트 랜더링
        <Dialog
            // title props와 message props에 각각의 값을 넣고
            title="화성 탐사 프로그램"
            message="닉네임을 입력해 주세요.">
                {/* input 태그(닉네임 값을 초기값으로 하고, 값 변경시 닉네임 설정 핸들링 함수 호출)와 버튼 태그 */}
                <input
                    value={nickname}
                    onChange={handleChange} />
                <button onClick={handleSignUp}>
                    가입하기
                </button>
            </Dialog>
    )
}