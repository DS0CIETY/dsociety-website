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
  opacity: 0.3;
`;

const Quote = styled.blockquote`
  margin: 0;
  opacity: 0.3;
`;

export const Home = () => {
  return (
    <HomeSection>
      <HomeTitle>
        A place where you can <SpecChar>be yourself</SpecChar>,{' '}
        <SpecChar>change something</SpecChar>,
        <SpecChar> improve this world.</SpecChar> Join us.
      </HomeTitle>
      <Quote>Try not to forget who you are</Quote>
    </HomeSection>
  );
};
