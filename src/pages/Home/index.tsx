import styled from 'styled-components';

const HomeSection = styled.section`
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  font-size: 4em;
`;

const SpecChar = styled.span`
  opacity: 0.2;
`;

const Quote = styled.blockquote`
  margin: 3vh 0 0;
  opacity: 0.5;
`;

export const Home = () => {
  return (
    <HomeSection>
      <HomeTitle>
        A place where you can <SpecChar>be yourself</SpecChar>,{' '}
        <SpecChar>change something</SpecChar>, of course if you know{' '}
        <SpecChar>who you are..</SpecChar>
      </HomeTitle>

      <Quote>Try not to forget who you are</Quote>
    </HomeSection>
  );
};
