import './App.css';
import {useSelector} from 'react-redux'
import Counter from './component/Counter';
import UserProfile from './component/UserProfile';
import Header from './component/Header';
import Auth from './component/Auth';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Header/>
      {!isAuth && <Auth />}
      {isAuth && <><UserProfile /> <Counter/></>}
    </div>
  );
}

export default App;
