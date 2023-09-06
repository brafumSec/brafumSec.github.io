import photo from '@/assets/fxw.png';
import { Col, Descriptions, Row, Grid } from 'antd';
import React from 'react';
import './Intro.less';

const { useBreakpoint } = Grid;
// 脚手架示例组件
const Intro: React.FC = () => {
  const screens = useBreakpoint();
  console.log(screens, 'sc')
  return (
    <div className="Intro" >
      <Row gutter={[12, 12]} style={{width: screens.xs ? '80%' : '100%'}}>
        <Col {...{ xs: 24, sm: 5, md: 5, lg: 5 }}>
          <img className="photo" src={photo} alt="Feng xuewei"  />
        </Col>
        <Col {...{ xs: 24, sm: 19, md: 19, lg: 19 }}>
          <Descriptions title="Feng Xuewei, Ph.D.">
            <Descriptions.Item span={3} label="Email">
              <a href="mailto:fengxw06@126.com">fengxw06@126.com</a>
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Research Area">Network and Information Security</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
