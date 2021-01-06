import styled from 'styled-components';
// import { Link } from '../../components/Link';

const ProjectsSection = styled.section`
  padding-top: 3vw;
  font-size: 1.5em;
`;

const ProjectsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProjectsItem = styled.li`
  margin: 1.3em 0;
  font-size: 1.8em;
`;

export const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsList>
        <ProjectsItem></ProjectsItem>
      </ProjectsList>
    </ProjectsSection>
  );
};
