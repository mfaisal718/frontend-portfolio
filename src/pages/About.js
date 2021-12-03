import { useState, useEffect } from "react";
import { Card, Content, Button } from "react-bulma-components";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <Card style={{ width: 300, margin: "auto", padding: "0.5px" }}>
      <Card.Header.Title>{about.name}</Card.Header.Title>
      <Card.Image src={about.headshot} alt={about.name} />
      <h3>{about.email}</h3>
      <Card.Content>
        <Content>{about.bio} </Content>
      </Card.Content>
      <a href="https://docs.google.com/document/d/1NirVotHvVRpQFVcQT6BtyGG5GbAdxNTe/edit?usp=sharing&ouid=115244396076401015051&rtpof=true&sd=true">
        <Button
          class="button is-info is-rounded"
          type="submit"
          value="resume"
          size="small"
        >
          RESUME
        </Button>
      </a>
    </Card>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
