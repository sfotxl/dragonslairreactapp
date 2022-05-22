import { Container } from "reactstrap";
import Sizzle from "../assets/img/Jerky.mp4";

const HomePage = () => {
  return (
    <Container>
      <video src={Sizzle} width="100%" muted loop autoPlay />
      <h1>Welcome to Dragons Lair</h1>
    </Container>
  );
};

export default HomePage;
