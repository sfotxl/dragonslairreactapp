import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import ContactForm from '../components/ContactForm';
import Map from "../features/maps/Map";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current='Contact' />
      <h1 className='text-center text-white mb-3 fourthCard'>Contact Us</h1>
      <ContactForm />
      <hr/>
      <Map/>
    </Container>
  );
};

export default ContactPage;
