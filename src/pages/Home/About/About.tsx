import Title from '@/components/Title';
import { Typography } from 'antd';
import { renderToString } from 'react-dom/server'
import React from 'react';
import data from '@/data/about';
import './About.less';

// 脚手架示例组件
const About: React.FC = () => {
  return (
    <div className="About" id="about">
      <Title level={3}>Me and My Research</Title>
      <div className="content" dangerouslySetInnerHTML={{__html: data.map((item, index) => (
          renderToString(<p key={index} dangerouslySetInnerHTML={{__html: item}}/>)
        )).join('')}}>
      </div>
    </div>
  );
};

export default About;
