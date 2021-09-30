import { FunctionComponent } from "react";
import { Wave } from "src/types";
import { Container, Field } from "./styles";

interface WaveBoxProps {
  wave: Wave;
}

export const WaveBox: FunctionComponent<WaveBoxProps> = ({
  wave: { waver, message, timestamp, isWinner },
}) => (
  <Container isWinner={isWinner}>
    <Field>Address: {waver}</Field>
    <Field>Time: {new Date(Number(timestamp)).toDateString()}</Field>
    <Field>Message: {message}</Field>
    <Field>Is {isWinner ? "a winner!" : "not a winner"}</Field>
  </Container>
);
