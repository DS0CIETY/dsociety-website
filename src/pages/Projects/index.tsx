import styled from 'styled-components';

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
  margin: 0 0 1em;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid #222;
  background-color: #09090990;
`;

export const Projects = () => {
  return (
    <ProjectsSection>
      {/* form for send user ideas */}

      <ProjectsList>
        <ProjectsItem>
          <span>Bot</span>
          <span>(progress)</span>
        </ProjectsItem>
      </ProjectsList>
    </ProjectsSection>
  );
};
