import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding-top: 4vw;
  font-size: 1.5em;
`;

const ProjectsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProjectsItem = styled.li`
  margin: 0 0 1em;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.4em;
  border: 0.1rem solid #222;
  background-color: #09090990;
`;

export const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsList>
        <ProjectsItem>
          {/* TODO: tooltip with description */}
          <span>Luckyswap</span>
          <span>(progress)</span>
        </ProjectsItem>
        {/* Osint tool */}
        {/* Crypto bot */}
        {/* Site scrapper */}
      </ProjectsList>
    </ProjectsSection>
  );
};
