import React from "react";
import Comment from "./Comment";

// comments 변수로 저장
const comments = [
    {
        name: "최상현",
        comment: "안녕하세요. 최상현입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워 보고 싶어요 !!",
    },
]

export default function CommentList(props) {
    return (
        <div>
            {/* 맵 함수 사용 */}
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                )
            })}
        </div>
    )
}