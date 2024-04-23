import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

export default class Notification extends React.Component {
    // 생성자의 state에 아무런 데이터를 가지고 있지 않음.
    constructor(props) {
        super(props);

        this.state = {};
    }

    // 콘솔 탭에서 확인 가능
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentUpdate() called.`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    // css로 렌더링
    render() {
        return (
            <div style = {styles.wrapper}>
                <span style = {styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        )
    }
}