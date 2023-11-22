import Title from '@/components/Title';
import { Col, Row, Typography, Divider } from 'antd';
import React from 'react';
import './Publications.less';
import data from '@/data/publications';
import otherData from '@/data/chinesePublications';

// 脚手架示例组件
const Publications: React.FC = () => {
  return (
    <div className="Selected Publications" id="publications">
      <Title level={3}>Publications</Title>
      <div className="content">
        {data.map((item, index) => {
          return (
            <div className="item" key={index}>
              <Row>
                <Col {...{ xs: 21, sm: 21, md: 22, lg:22 }} className="r2">
                  <Typography.Link href={item.paper.link} ><div className="tt" dangerouslySetInnerHTML={{ __html: item.paper.name }}></div></Typography.Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.paper.authors }}
                  ></div>
                  <span className='org'
                    dangerouslySetInnerHTML={{ __html: item.paper.org }}
                  ></span>
                  {item.paper.note &&
                    item.paper.note.map((n, index) => (
                      <strong className="note" key={index}>{n}</strong>
                    ))}
                </Col>
                <Col {...{ xs: 3, sm: 3, md: 2, lg: 2 }} className="r3">{item.date}</Col>
              </Row>
            </div>
          );
        })}
      </div>
      <Title level={3}>Chinese Publications</Title>
      <div className="other">
      {otherData.map((item, index) => {
          return (
            <div className="item" key={index}>
              <Row>
                <Col {...{ xs: 21, sm: 21, md: 22, lg:22 }} className="r2">
                  <Typography.Link href={item.paper.link} ><div className="tt" dangerouslySetInnerHTML={{ __html: item.paper.name }}></div></Typography.Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.paper.authors }}
                  ></div>
                  <span className='org'
                    dangerouslySetInnerHTML={{ __html: item.paper.org }}
                  ></span>
                  {item.paper.note &&
                    item.paper.note.map((n, index) => (
                      <strong className="note" key={index}>{n}</strong>
                    ))}
                </Col>
                <Col {...{ xs: 3, sm: 3, md: 2, lg: 2 }} className="r3">{item.date}</Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
