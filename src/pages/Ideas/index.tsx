import styled from 'styled-components';
import { GlitchItem } from '../../components';

const IdeasSection = styled.section`
  padding-top: 5vw;
  font-size: 1.5em;
`;

const IdeasList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const IdeaItem = styled.li`
  margin: 0 0 1em;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 10%, 1) 0%,
    hsla(0, 0%, 3%, 1) 100%
  );
`;

export const Ideas = () => {
  return (
    <IdeasSection>
      <IdeasList>
        <IdeaItem>
          <GlitchItem>Crypto Bot</GlitchItem>
          <span>(soon)</span>
        </IdeaItem>
      </IdeasList>
    </IdeasSection>
  );
};
