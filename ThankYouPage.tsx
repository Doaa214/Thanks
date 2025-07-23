
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CheckCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThankYouPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ background: '#fdfaf6' }}>
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card
            className="text-center p-5 shadow-sm border-0"
            style={{
              borderRadius: '2rem',
              background: '#fff',
              color: '#444',
            }}
          >
            <CheckCircle size={64} color="#7bc49f" className="mb-4" />
            <h2 className="mb-3" style={{ fontWeight: '700', fontFamily: 'Cairo, sans-serif' }}>
              شكرًا لك!
            </h2>
            <p className="lead" style={{ fontFamily: 'Cairo, sans-serif' }}>
              تم استلام طلبك بنجاح 🎉<br />
              سنتواصل معك قريبًا لتأكيد التفاصيل.
            </p>
            <Button
              variant="light"
              href="/"
              className="mt-4 px-4 py-2"
              style={{
                border: '1px solid #ccc',
                borderRadius: '30px',
                fontWeight: '500',
              }}
            >
              العودة للصفحة الرئيسية
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;
