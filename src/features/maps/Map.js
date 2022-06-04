import { Row, Col } from 'reactstrap';

const Map = () => {
  return (
    <Row>
      <Col xs={12} lg={6}>
        <iframe
          title='Tomball Farmers Market map'
          width='100%'
          height='300px'
          src='https://www.openstreetmap.org/export/embed.html?bbox=-95.62106251716615%2C30.093417592247867%2C-95.60993671417238%2C30.10029582317173&amp;layer=mapnik&amp;marker=30.096856767533616%2C-95.61549961566925'
        ></iframe>
        <br />
        <small>
          <a
            className='link-color'
            target='_blank'
            rel='noreferrer'
            href='https://www.openstreetmap.org/?mlat=30.09686&amp;mlon=-95.61550#map=17/30.09686/-95.61550&amp;layers=N'
          >
            View Larger Map
          </a>
        </small>
      </Col>
      <Col>
        <h2 className='thirdCard'>Where to Find Us</h2>
        <h3 className='text-white align-middle'>Tomball Farmers Market</h3>
        <address>205 W Main St, Tomball, TX 77375, United States</address>
        <p>Every Saturday from 9am-1pm, rain or shine.</p>
      </Col>
    </Row>
  );
};

export default Map;
