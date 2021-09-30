import { FunctionComponent } from "react";
import { Wave } from "src/types";
import { WaveBox } from "..";
import { Container } from "./styles";

interface WavesListProps {
  waves: Wave[];
}

export const WavesList: FunctionComponent<WavesListProps> = ({ waves }) => 
    <Container>
      {waves.map((wave) => (
        <WaveBox key={wave.timestamp} wave={wave} />
      ))}
    </Container>
  
