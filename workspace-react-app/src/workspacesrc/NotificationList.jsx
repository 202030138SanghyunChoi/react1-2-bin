import React from "react";
import Notification from "./Notification";

// 알림 개수
// 로그 중복으로 헷갈리기 때문에 id 추가
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
    {
        id: 4,
        message: "이제 곧 미팅이 시작된다니깐요?!",
    },
    {
        id: 5,
        message: "이제 곧 미팅이 시작된다고 했습니다. 두 번 경고하지 않아요",
    },
    {
        id: 6,
        message: "찐막 경고 메시지입니다.",
    },
    {
        id: 7,
        message: "진짜 찐막 경고 메시지입니다.",
    },
]

var timer;

export default class NotificationList extends React.Component {
    // 생성자에서 state에 빈 배열을 넣음.
    constructor(props) {
        super(props);

        this.state = {
            notifiations: [],
        }
    }

    componentDidMount() {
        const { notifiations } = this.state;
        // 1000으로 1초마다 아래 작업 수행
        timer = setInterval(() => {
            // reservedNotifications가 this.state보다 크면
            // reservedNotifications의 인덱스에 this.state의 크기를 넣고
            // this.state에 reservedNotifications의 인덱스 배열을 푸시
            // setState를 사용하여 state를 빈 배열에 this.State를 넣도록 변경
            if (notifiations.length < reservedNotifications.length) {
                const index = notifiations.length;
                notifiations.push(reservedNotifications[index]);
                this.setState({
                    notifiations: notifiations,
                })
            }
            // 그러지 않으면
            // 배열을 비우고 
            // 타이머 제거 
            else {
                this.setState({
                    notifiations: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    // 타이머가 초기화되면 언마운트 시킴
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() { 
        return (
            <div>
                {this.state.notifiations.map((notification) => {
                    return (
                        <Notification
                            // id값을 키 값으로 설정
                            key = {notification.id}
                            id = {notification.id}
                            message = {notification.message}
                        />
                    )
                })}
            </div>
        )
    }
}