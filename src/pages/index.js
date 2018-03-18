import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { NavBar, Icon } from 'antd-mobile';
function IndexPage() {
  return (
    <div>
      <NavBar mode="light">NavBar</NavBar>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
