import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Backend/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import ProfilePage from './Pages/Profile';
import SurveyPage from './Pages/Survey';
import ResultPage from './Pages/Results';

function App() {
  return (
      <div style={{backgroundColor: '#F8F8F8'}}>
          <AuthProvider>
              <Routes>
                  <Route path='/' element={<HomePage />}></Route>
                  <Route path='/login' element={<LoginPage />}></Route>
                  <Route path='/signup' element={<SignupPage />}></Route>
                  <Route path='/profile'
                         element={
                      <PrivateRoute children={<ProfilePage />}/>
                  }> </Route>
                  <Route path='/survey'
                         element={
                             <PrivateRoute children={<SurveyPage />}/>
                 }> </Route>
                  <Route path='/results'
                         element={
                             <PrivateRoute children={<ResultPage />}/>
                 }> </Route>
              </Routes>
          </AuthProvider>
      </div>
  );
}

export default App;
