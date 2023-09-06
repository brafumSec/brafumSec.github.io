import { Anchor } from 'antd';
import React from 'react';
import './Topbar.less';

// 脚手架示例组件
const Topbar: React.FC = () => {
  return (
    <div className="Topbar">
    <Anchor
    direction="horizontal"
    className="anchor"
    targetOffset={60}
    onClick={(e) => e.preventDefault()}
    items={[
      {
        key: 'about',
        href: '#about',
        title: 'About',
      },
      {
        key: 'publications',
        href: '#publications',
        title: 'Publications',
      },
      {
        key: 'awards',
        href: '#awards',
        title: 'Awards',
      },
      {
        key: 'acknowledgements',
        href: '#acknowledgements',
        title: 'Acknowledgements',
      },
    ]}
  />
    </div>

  );
};

export default Topbar;
