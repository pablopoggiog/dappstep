import { FunctionComponent, useState } from "react";
import { Button } from "src/components";
import { Container, Input } from "./styles";

interface FormProps {
  onWave: (message: string) => void;
}

export const Form: FunctionComponent<FormProps> = ({ onWave }) => {
  const [message, setMessage] = useState("");

  const changeMessage = (event: any) => {
    const { value } = event.target;
    console.log({ value });
    setMessage(value);
  };

  return (
    <Container>
      <Input value={message} onChange={changeMessage} />
      <Button onClick={() => onWave(message)}>
        Tell me something while waving!
      </Button>
    </Container>
  );
};
