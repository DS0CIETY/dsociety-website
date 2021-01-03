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
  border: 0.1rem solid var(--black);
  background-color: #0005;
`;

export const Ideas = () => {
  return (
    <IdeasSection>
      <IdeasList>
        <IdeaItem>
          <GlitchItem>Crypto Bot</GlitchItem>
          <span>(in progress)</span>
        </IdeaItem>
      </IdeasList>
    </IdeasSection>
  );
};
