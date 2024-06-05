import Dialog from "./Dialog";
import FancyBorder from "./FancyBorder";

export default function WelcomeDialog() {
    return (
        // Dialog 컴포넌트를 Specialization해서 사용
        <Dialog
            title="어서 오세요"
            message="우리 사이트에 방문하신 것을 환영합니다!"
        />
    )
}