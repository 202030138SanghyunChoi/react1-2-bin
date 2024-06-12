import styled from "styled-components"

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;

const RoundButton = styled(Button)`
    border-radius: 16px;
`

export default function StyleMainPage() {
    return (
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundButton>Normal Round</RoundButton>
            <RoundButton dark>Dark Round</RoundButton>
        </Wrapper>
    )
}