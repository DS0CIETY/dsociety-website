import styled from 'styled-components';

const ContactsSection = styled.section`
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialList = styled.ul``;

const SocialLink = styled.a``;

export const Contacts = () => {
  return (
    <ContactsSection>
      <SocialList>
        <li>
          <SocialLink href="#">MEDIUM</SocialLink>
        </li>
        <li>
          <SocialLink href="#">TWITTER</SocialLink>
        </li>
        <li>
          <SocialLink href="#">GITHUB</SocialLink>
        </li>
        <li>
          <SocialLink href="mailto:ds0c1ety@protonmail.ch">MAIL</SocialLink>
        </li>
      </SocialList>
    </ContactsSection>
  );
};
