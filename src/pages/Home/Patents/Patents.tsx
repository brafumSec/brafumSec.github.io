import Title from '@/components/Title';
import { Table } from 'antd';
import React from 'react';
import data from './data';
import './Patents.less';

const dataSource = data;

const columns = [
  {
    title: '序号',
    dataIndex: 'sn',
    key: 'sn',
    align: 'center'
  },
  {
    title: '专利名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
    align: 'center'
  },
  {
    title: '专利号',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    align: 'center'
  },
];
// 脚手架示例组件
const Patents: React.FC = () => {
  return (
    <div className="Patents" id="patents">
      <Title level={3}>Patents</Title>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Patents;
