import FancyBorder from "./FancyBorder";

export default function Dialog(props) {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
            {props.title}
        </h1>
        <p className="Dialog-mssage">
            {props.message}
        </p>
        </FancyBorder>
    )
}