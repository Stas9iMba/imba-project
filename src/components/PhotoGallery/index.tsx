import { Col, Row, Image } from 'antd';

function PhotoGallery() {
  return (
    <Row gutter={[16, 16]}>
      {Array.from({ length: 20 }).map(() => (
        <Col span={6}>
          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoGallery;
