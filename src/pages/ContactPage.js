import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current='Contact' />
      <h1 className='text-center text-white fourthCard'>Contact Us</h1>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
