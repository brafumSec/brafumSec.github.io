import { Table, Typography, Row, Col } from 'antd';
import React from 'react';
import data from '@/data/acknowledgements';
import Title from '@/components/Title';
import './Acknowledgements.less';

// 脚手架示例组件
const Acknowledgements: React.FC = () => {
  return (
    <div className="Acknowledgements" id="acknowledgements">
      <Title level={3}>Acknowledgements</Title>
      <ul className="list">
        {data.map((item, index) => {
          if (item.link && item.text) {
            return (
              <li key={index}>
                {item.text}（
                <Typography.Link className="link" href={item.link}>
                  {' '}{item.link}{' '}
                </Typography.Link>
                ）
              </li>
            );
          } else if (item.text && item.cert) {
            return (
              <li key={index}>
                {item.text} {item.cert}
              </li>
            );
          } else if (item.link) {
            return (
              <li key={index}>
                <Typography.Link className="link" href={item.link}>
                  {item.link}
                </Typography.Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Acknowledgements;
