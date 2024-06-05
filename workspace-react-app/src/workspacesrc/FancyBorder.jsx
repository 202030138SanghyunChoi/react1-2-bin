export default function FancyBorder(props) {
    return (
        // css 부재 'FancyBorder FancyBorder-color' 는 css class임
        // props로 color를 받아서 자연스럽게 css class를 완성시키기
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {/* children props는 배열로 되어 있어 WelcomeDialog의 DOM을 다 받을 수 있음. */}
            {props.children}
        </div>
    )
}