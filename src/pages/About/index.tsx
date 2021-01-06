import styled from 'styled-components';

const AboutSection = styled.section`
  padding-top: 3vw;
`;

const AboutMainInfo = styled.div`
  font-size: 1.5em;
  line-height: 1.3em;
`;

const Quote = styled.blockquote`
  margin: 7vh 0 0;
  opacity: 0.3;
`;

export const About = () => {
  return (
    <AboutSection>
      <AboutMainInfo>
        <h2>Our movement</h2>
        <p>
          Just a group of those who want to change or create something. We're
          trying to start doing something useful, and it doesn't depend on your
          ability. It's like a hobby that can become something big. There are no
          deadlines, no clear rules. Everyone has their own, but everyone can
          offer something to improve our society, the world. Or is it better to
          create a new society? Your choice.
        </p>
      </AboutMainInfo>

      <Quote>Better to try than do nothing</Quote>
    </AboutSection>
  );
};
