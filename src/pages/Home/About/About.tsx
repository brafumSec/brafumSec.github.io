import Title from '@/components/Title';
import { Typography } from 'antd';
import React from 'react';
import data from '@/data/about';
import './About.less';

// 脚手架示例组件
const About: React.FC = () => {
  return (
    <div className="About" id="about">
      <Title level={3}>Me and My Research</Title>
      <div className="content">
        {data.map((item, index) => (
          <Typography.Paragraph key={index}>{item}</Typography.Paragraph>
        ))}
      </div>
    </div>
  );
};

export default About;
