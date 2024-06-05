function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

export default function TestApp() {
    return (
        // SplitPane에 props의 left와 right에 각각의 컴포넌트를 넣어 전달
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            }
        />
    )
}

function Contacts() {
    return (
        <div>컨택트</div>
    )
}

function Chat() {
    return (
        <div>채팅</div>
    )
}