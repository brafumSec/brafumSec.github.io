import photo from '@/assets/fxw.png';
import { Col, Descriptions, Row, Grid } from 'antd';
import React from 'react';
import data from '@/data/intro';
import './Intro.less';

const { useBreakpoint } = Grid;
// 脚手架示例组件
const Intro: React.FC = () => {
  const screens = useBreakpoint();
  return (
    <div className="Intro" >
      <Row gutter={[12, 12]} style={{width: screens.xs ? '80%' : '100%'}}>
        <Col {...{ xs: 24, sm: 3, md: 3, lg: 3 }}>
          <img className="photo" src={photo} alt="Feng xuewei"  />
        </Col>
        <Col {...{ xs: 24, sm: 19, md: 19, lg: 19 }}>
          <Descriptions title="Feng Xuewei, Ph.D.">
            <Descriptions.Item span={3} label="Email">
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Research Area">{data.research}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
