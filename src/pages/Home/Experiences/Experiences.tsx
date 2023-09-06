import Title from '@/components/Title';
import { Table, Divider, Typography } from 'antd';
import React from 'react';
import data from './data';
import './Experiences.less';

const dataSource = data;

const columns = [
  {
    title: '学历 / 工作',
    dataIndex: 'phase',
    key: 'phase',
    width: 100,
    align: 'center',
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
  {
    title: '学校 / 工作单位',
    dataIndex: 'org',
    key: 'org',
    align: 'center',
  },
  {
    title: '专业方向',
    dataIndex: 'major',
    key: 'major',
    align: 'center',
  },
  {
    title: '奖项及岗位',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  },
];

// 脚手架示例组件
const Experiences: React.FC = () => {
  return (
    <div className="Experiences" id="experiences">
      <Title level={3}>Professional Experiences</Title>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Experiences;
