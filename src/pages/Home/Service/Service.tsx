import Title from '@/components/Title';
import { Table, Divider, Typography } from 'antd';
import React from 'react';
import data from './data';
import './Service.less';

const dataSource = data;

const columns = [
  {
    title: '序号',
    dataIndex: 'sn',
    key: 'sn',
    width: 60,
    align: 'center',
  },
  {
    title: '漏洞编号',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '贡献者',
    dataIndex: 'contributors',
    key: 'contributors',
    render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  },
  {
    title: '影响范围或授权单位',
    dataIndex: 'org',
    key: 'org',
  },
];

// 脚手架示例组件
const Service: React.FC = () => {
  return (
    <div className="Service" id="service">
      <Title level={3}>Professional Activities</Title>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Service;
