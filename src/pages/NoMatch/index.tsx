import styled from 'styled-components';

const NoMatchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
`;

export const NoMatch = () => {
  return (
    <NoMatchSection>
      <h2>404</h2>
    </NoMatchSection>
  );
};
