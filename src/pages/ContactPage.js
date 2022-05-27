import ContactForm from '../components/ContactForm'

const ContactPage = () => {
    return <ContactForm />
}
=======
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact" />
    </Container>
  );
};
