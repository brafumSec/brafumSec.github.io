import { Table, Typography, Row, Col } from 'antd';
import React from 'react';
import data from './data';
import Title from '@/components/Title';
import './Acknowledgements.less';

// 脚手架示例组件
const Acknowledgements: React.FC = () => {
  return (
    <div className="Acknowledgements" id="acknowledgements">
      <Title level={3}>Acknowledgements</Title>
      <ul className="list">
        <li>
          高通致谢(
          <Typography.Link
            className="link"
            href="https://docs.qualcomm.com/product/publicresources/securitybulletin/november-2022-bulletin.html"
          >
            https://docs.qualcomm.com/product/publicresources/securitybulletin/november-2022-bulletin.html
          </Typography.Link>
          )
        </li>
        <li>
          阿里致谢(
          <Typography.Link
            className="link"
            href="https://mp.weixin.qq.com/s/u6mcQb0zJJQl8MlDQfW6WA"
          >
            https://mp.weixin.qq.com/s/u6mcQb0zJJQl8MlDQfW6WA
          </Typography.Link>
          )
        </li>
        <li>华为致谢 证书</li>
        <li>中国电信致谢 证书</li>
        <li>
          <Typography.Link
            className="link"
            href="https://cybersecuritynews.com/mitm-attack-on-wi-fi-networks/"
          >
            https://cybersecuritynews.com/mitm-attack-on-wi-fi-networks/
          </Typography.Link>
        </li>
        <li>
          <Typography.Link
            className="link"
            href="https://blog.apnic.net/2023/05/29/mitm-attacks-in-public-wi-fi-networks-without-rogue-access-points/"
          >
            https://blog.apnic.net/2023/05/29/mitm-attacks-in-public-wi-fi-networks-without-rogue-access-points/
          </Typography.Link>
        </li>
        <li>
          <Typography.Link
            className="link"
            href="https://www.theregister.com/2023/04/07/wifi_access_icmp/"
          >
            https://www.theregister.com/2023/04/07/wifi_access_icmp/
          </Typography.Link>
        </li>
      </ul>
    </div>
  );
};

export default Acknowledgements;
