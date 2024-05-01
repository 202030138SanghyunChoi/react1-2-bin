import useUserStatus from "./useUserStatus";
import React from "react";

export default function UserStatus(props) {
    //  커스텀 훅 사용
    const isOnline = useUserStatus(props.user.id)

    if (isOnline == null) {
        return '대기 중...';
    }
    return isOnline ? '온라인' : '오프라인';
}