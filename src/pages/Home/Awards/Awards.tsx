import Title from '@/components/Title';
import { Table, Typography, Row, Col } from 'antd';
import React from 'react';
import data from './data';
import './Awards.less';

const dataSource = data;

const columns = [
  {
    title: '序号',
    dataIndex: 'sn',
    key: 'sn',
    align: 'center',
  },
  {
    title: '奖项名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '奖励等级',
    dataIndex: 'level',
    key: 'level',
    render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
];
// 脚手架示例组件
const Awards: React.FC = () => {
  return (
    <div className="Awards" id="awards">
      <Title level={3}>Awards</Title>
      <ul className="content">
        {data.map((item, index) => {
          return (
            <li className="item" key={index}>
              <Row justify="space-between">
                <Col {...{ xs: 12, sm: 12, md: 12, lg: 12 }} className="r2">
                  <Typography.Link href='#'><span className="tt" dangerouslySetInnerHTML={{ __html: item.name }}></span></Typography.Link>
                </Col>
                <Col {...{ xs: 10, sm: 10, md: 10, lg: 10 }} className="r3">             <span
                    dangerouslySetInnerHTML={{ __html: item.level }}
                  ></span></Col>
              </Row>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Awards;
