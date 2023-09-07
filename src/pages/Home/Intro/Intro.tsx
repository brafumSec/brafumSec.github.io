import photo from '@/assets/fxw.png';
import { Col, Descriptions, Row, Grid } from 'antd';
import React from 'react';
//@ts-ignore
import data from '@/data/intro.tsx';
import './Intro.less';

const { useBreakpoint } = Grid;
// 脚手架示例组件
const Intro: React.FC = () => {
  const screens = useBreakpoint();
  return (
    <div className="Intro" >
      <Row gutter={[12, 12]} style={{width: screens.xs ? '80%' : '100%'}}>
        <Col {...{ xs: 24, sm: 5, md: 4, lg: 3 }}>
          <img className="photo" src={photo} alt="Feng xuewei"  />
        </Col>
        <Col {...{ xs: 24, sm: 19, md: 20, lg: 21 }}>
          <Descriptions {...data}>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
