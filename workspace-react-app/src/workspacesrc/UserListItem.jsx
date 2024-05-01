import React, { useState, useEffect } from "react";

export default function UserListItem(props) {
    //  커스텀 훅 사용
    const isOnline = useUserStatus(props.user.id)

    return (
        // 사용자의 온라인/오프라인 상태에 따라 초로색/검은색으로 표시
        <li style={{ color : isOnline ? 'green' : 'black '}}>
            {props.user.name}
        </li>
    )
}