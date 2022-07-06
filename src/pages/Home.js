import { useState, useEffect } from "react";
import { Card } from "react-bulma-components";
import { Button } from "react-bulma-components";
import { Content } from "react-bulma-components";

function Home(props) {
  return (
    <Card style={{ width: 300, margin: "auto", padding: "0.5px" }}>
      <Card.Header.Title>Innovator. Entrepreneur. Engineer.</Card.Header.Title>
      <Card.Image src="https://i.imgur.com/xVjGoeU.jpg" />
      <h3>Building Tech for Good</h3>
      <Card.Content>
        <Content>
          A social Entrepreneur and technical project manager who has been
          harnassing the power of tech to do good in his community and created
          tech platforms that are serving thousands of end users on a monthly
          basis. He has now upskilled himself to combine his insights of
          building with and for end users with his technical skillsets from
          General Assembly Software Engineering bootcamp. He can help your
          company thrive and build for the human centered future. He has a track
          record of motivating and inspiring his teams to reach their potential
          and deliver for the end users and the clients. Contact him at
          mfaisal718@gmail.com or call 3478458284.{" "}
        </Content>
      </Card.Content>
    </Card>
  );
}

export default Home;
