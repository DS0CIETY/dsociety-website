import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  font-size: 3em;
`;

const ChoiceButton = styled.button`
  margin: 0.3em;
  padding: 1em;
  border-radius: 2rem;
  border: 0.1rem solid #333;
  font-size: 3em;
  background-color: transparent;
  color: #fff;
`;

const RedChar = styled.span`
  color: var(--brand-color);
`;

export const Home = () => {
  return (
    <HomeSection>
      <HomeTitle>
        <RedChar>0</RedChar>ne or Zer<RedChar>0</RedChar>, your ch<RedChar>0</RedChar>ice
      </HomeTitle>
      <div>
        <ChoiceButton>0</ChoiceButton>
        <ChoiceButton>1</ChoiceButton>
      </div>
    </HomeSection>
  );
};
