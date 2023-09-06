import Title from '@/components/Title';
import { Col, Row, Typography,Table } from 'antd';
import React from 'react';
import './Publications.less';
import data from './data';
const dataSource = [
  {
    key: '1',
    sn:1,
    name: '一种网络攻击场景的因果知识挖掘方法',
    date: 2013,
    rank: 1,
    number: '201310681330.7（已授权）'
  },

];

const columns = [
  {
    title: '序号',
    dataIndex: 'sn',
    key: 'sn',
  },
  {
    title: '专利名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: '专利号',
    dataIndex: 'number',
    key: 'number',
  },
];
// 脚手架示例组件
const Patents: React.FC = () => {
  return (
    <div className="Patents">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Patents;
