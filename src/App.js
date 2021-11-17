// import logo from './logo.svg';
import './App.css';
// import { Button } from 'antd';
import 'antd/dist/antd.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import {adminRoutes} from './routes'
import Frame  from './components/Frame/Index';
import './App.css'
import {isLogined} from './utils/auth'
function App() {
  return (isLogined()?
    <Frame className="App">
      
<Switch>
{
  adminRoutes.map(route=>{
    return (
      <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={routeProps=>{
        return <route.component{...routeProps}/>;
      }}
      />
    );
  })
}
<Redirect to={adminRoutes[0].path} from="/admin"></Redirect>
<Redirect to="/404"></Redirect>
</Switch>
 
    </Frame>:<Redirect to='/login'/>
  );
}

export default App;
