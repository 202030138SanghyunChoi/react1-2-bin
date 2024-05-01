import React, { useState, useEffect } from "react";

// 커스텀 훅 추출하기
export default function useUserStatus(userId) {
    // isOnline 변수 생성 useState 훅 사용
    const [isOnline, setIsOnline] = useState(null);

    // useEffect 훅 사용
    useEffect(() => {
        // 온라인 오프라인 상태 설정 메서드
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        // // 사용자 상태 구독 함수
        // ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        // // 아래 함수 리턴
        // return () => {
        //     // 사용자 상태 구독 취소 함수
        //     ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        // }
    })

    return isOnline;
}