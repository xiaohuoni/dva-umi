import { connect } from 'dva';
import styles from './page.less';
import {Button} from 'antd';
import Example from './components/Example';

function App({example1,dispatch}) {
  const {list,text} = example1;
  const exampleData = {
    list:list,
    handleClick:() => {
      dispatch({
        type: 'example1/delete',
        payload: {
        },
      })
    }
  }
  return (
    <div className={styles.normal}>
      <h2>
        {text}
      </h2>
      <Example {...exampleData}/>
      <Button  type="primary" onClick={() => {
          dispatch({
            type: 'example1/update',
          });
        }}>点击</Button>
    </div>
  );
}

export default connect(({example1})=>({example1}))(App)
