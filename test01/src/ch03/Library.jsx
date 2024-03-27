import React from "react";
// Book.jsx 참조
import Book from "./Book";

// Library 컴포넌트 생성
function Library(props) {
    return (
        <div>
            {/* Book의 function 사용 */}
            <Book name = "처음 만난 파이썬" numOfPage = {300} />
            <Book name = "처음 만난 AWS" numOfPage = {400} />
            <Book name = "처음 만난 리액트" numOfPage = {500} />
        </div>
    );
}

// 이 컴포넌트를 다른 곳에서 import를 가능하게 함.
export default Library;