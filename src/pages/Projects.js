import { useState, useEffect } from "react";
import { Card } from "react-bulma-components";
import { Button } from "react-bulma-components";
import { Content } from "react-bulma-components";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <Card style={{ width: 300, margin: "auto" }}>
        <Card.Header.Title />
        <h1>{project.name}</h1>
        <Card.Image src={project.image} alt={project.name} />
        <Card.Content>
          <Content>{project.Description} </Content>
        </Card.Content>
        <a href={project.git}>
          <Button color="success" type="submit" value="Github" size="small">
            Github
          </Button>
        </a>
        <a href={project.live}>
          <Button color="primary" type="submit" value="Live Site" size="small">
            Live Site
          </Button>
        </a>
      </Card>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
