import styled from 'styled-components';

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
        <IdeaItem>First</IdeaItem>
        <IdeaItem>Second</IdeaItem>
        <IdeaItem>Third</IdeaItem>
      </IdeasList>
    </IdeasSection>
  );
};
