import { Layout, Row, Typography,Divider} from 'antd';
import {TitleProps } from 'antd/es/typography/Title';
import React from 'react';
import './Title.less';

const Title: React.FC<TitleProps>= (props) => {
  return (
    <div className="Title">
    <Typography.Title {...props}>
    </Typography.Title>
    </div>
  );
};

export default Title;
