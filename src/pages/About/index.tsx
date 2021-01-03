import styled from 'styled-components';

const AboutSection = styled.section`
  padding-top: 3vw;
  font-size: 1.5em;
`;

export const About = () => {
  return (
    <AboutSection>
      <h2>Our movement</h2>
      <p>
        What and why. We do not know. Just a group of those who want to change
        or create something. We do not hope that anyone will join us. Anyone who
        wants to do this will do it. Let's dwell on this thought.
      </p>
      <p>
        We are trying to start doing something useful and it does not depend on
        what you can. In any case, if you are with us, you will have to learn.
        It's like a hobby that can become something more. We work as long as
        there is time and do not have any deadlines.
      </p>
      <p>
        Maybe we just stay in the gray void of this world like most others. But
        it's better to try than nothing to do. Your choice
      </p>
    </AboutSection>
  );
};
