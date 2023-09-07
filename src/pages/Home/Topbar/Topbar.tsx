import { Anchor } from 'antd';
import React from 'react';
import './Topbar.less';
import data from '@/data/nav';

// 脚手架示例组件
const Topbar: React.FC = () => {
  return (
    <div className="Topbar">
    <Anchor
    direction="horizontal"
    className="anchor"
    targetOffset={60}
    onClick={(e) => e.preventDefault()}
    items={data}
  />
    </div>

  );
};

export default Topbar;
