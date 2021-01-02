import styled from 'styled-components';

const HomeSection = styled.section`
  padding-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  font-size: 4.2em;
  text-align: center;
`;

const SpecialChar = styled.span`
  opacity: 0.2;
`;

export const Home = () => {
  return (
    <HomeSection>
      <HomeTitle>
        A place where you can <SpecialChar>be yourself</SpecialChar>, of course
        if you know <SpecialChar>who you are..</SpecialChar>
      </HomeTitle>
    </HomeSection>
  );
};
