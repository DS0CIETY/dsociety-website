import styled from 'styled-components';
import { Link } from '../../components/Link';

const ContactsSection = styled.section`
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SocialListItem = styled.li`
  margin: 1.3em 0;
  font-size: 2.3em;
`;

export const Contacts = () => {
  return (
    <ContactsSection>
      <SocialList>
        <SocialListItem>
          <Link href="https://medium.com/@dsociety">MEDIUM</Link>
        </SocialListItem>

        <SocialListItem>
          <Link href="https://twitter.com/dsociety3">TWITTER</Link>
        </SocialListItem>

        <SocialListItem>
          <Link href="https://github.com/DS0CIETY">GITHUB</Link>
        </SocialListItem>

        <SocialListItem>
          <Link href="mailto:ds0c1ety@protonmail.ch">MAIL</Link>
        </SocialListItem>
      </SocialList>
    </ContactsSection>
  );
};
