import app from './scripts/firebaseConfig';
import { getAuth } from "firebase/auth";
import Home from './components/Home'
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const auth = getAuth()
  const [user, isLoading] = useAuthState(auth);

  return (
    user ? <Home /> : <Login />
  )
}

export default App;
