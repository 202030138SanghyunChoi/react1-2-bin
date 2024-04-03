import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

export default function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                )
            })}
            <Comment name="최상현" comment = "술 먹고 싶다.. 이제 수요일이야.... 내일 수업 개극혐인데다 금요일까지 2일이나 남았어.."/>
        </div>
    );
}