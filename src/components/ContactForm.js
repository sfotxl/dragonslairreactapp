import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from '../utils/validateContactForm';

const ContactForm = () => {
  const handleSubmit = (values) => {
    // TODO: Send values to server
    console.log('form values:', values);
    console.log('in JSON format:', JSON.stringify(values));
  };

  const renderError = (message) => {
    return <p className='help is-danger'>{message}</p>;
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        areaCode: '',
        telNum: '',
        email: '',
        order: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup row>
            <Label htmlFor='firstName' md='2'>
              First Name :
            </Label>
            <Col md='10'>
              <Field
                name='firstName'
                id='firstName'
                placeholder='First Name'
                className='form-control'
              />
              <ErrorMessage name='firstName' render={renderError} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor='lastName' md='2'>
              Last Name :
            </Label>
            <Col md='10'>
              <Field
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                className='form-control'
              />
              <ErrorMessage name='lastName' render={renderError} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor='areaCode' md='2'>
              Contact Tel. :
            </Label>
            <Col xs='5' md='3'>
              <Field
                name='areaCode'
                id='areaCode'
                type='tel'
                placeholder='Area code'
                className='form-control'
              />
              <ErrorMessage name='areaCode' render={renderError} />
            </Col>
            <Col xs='7'>
              <Field
                name='telNum'
                id='telNum'
                min='0'
                type='tel'
                placeholder='Tel. number'
                className='form-control'
              />
              <ErrorMessage name='telNum' render={renderError} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor='email' md='2'>
              Email :
            </Label>
            <Col md='10'>
              <Field
                name='email'
                id='email'
                placeholder='Email'
                type='email'
                className='form-control'
              />
              <ErrorMessage name='email' render={renderError} />
            </Col>
          </FormGroup>
          <FormGroup row className='mx-auto'>
            <Label htmlFor='orderType' md='2'>
              Order Type :
            </Label>
            <Col
              md='10'
              id='form-radio-group'
              className='d-flex align-items-center justify-content-center'
            >
                <label className='px-2'>
                <Field
                  type='radio'
                  id='pickup'
                  name='orderType'
                  value='pickup'
                />{' '}
                Pickup
              </label>
              <label className='px-2'>
                <Field
                  type='radio'
                  id='delivery'
                  name='orderType'
                  value='delivery'
                />{' '}
                Delivery <em>(Montgomery County Only)</em>
              </label>
              
            </Col>
          </FormGroup>

          <ErrorMessage name='orderType' render={renderError} />

          <FormGroup row>
            <Label htmlFor='order' md='2'>
              Order:{' '}
            </Label>
            <Col md='10'>
              <Field
                name='order'
                id='order'
                as='textarea'
                rows='8'
                className='form-control'
              />
            </Col>
          </FormGroup>
          <ErrorMessage name='order' render={renderError} />
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type='submit' color='danger' className='button'>
                Submit Order
              </Button>
            </Col>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
