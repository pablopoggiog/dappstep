import { FunctionComponent } from "react";
import { Wave } from "src/types";
import { Container, Field } from "./styles";

interface WaveBoxProps {
  wave: Wave;
}

export const WaveBox: FunctionComponent<WaveBoxProps> = ({
  wave: { waver, message, timestamp, winner },
}) => (
  <Container isWinner={winner}>
    <Field>Address: {waver}</Field>
    <Field>Time: {new Date(Number(timestamp)).toDateString()}</Field>
    <Field>Message: {message}</Field>
    <Field>Is {winner ? "a winner!" : "not a winner"}</Field>
  </Container>
);
