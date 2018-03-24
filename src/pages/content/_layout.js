import { Layout,  Breadcrumb } from "antd";
import Link from 'umi/link';

const {  Content  } = Layout;

const App = props => {
  return (
    <div>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item><Link to="/content">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/content/list">List</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/content/example">example</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
        </Content>
    </div>
  );
};

export default App;
