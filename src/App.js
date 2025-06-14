import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import PasswordRecovery from './components/PasswordRecovery';
import SignUpForm from './components/SignUpForm';
import VerificationPage from './components/VerificationPage/verification';
import SetNewPassword from './components/SetNewPassword';
import LinkedInCallback from './components/LinkedInCallback';

import './App.css';

import DashBoard from './components/DashBoard';
import AccountsPage from './components/AccountsPage/accounts-page';
import SharePostPage from './components/SharePost/sharePost';
import ThankYouPage from './components/ThankyouPage/thankyouPage';
import ProfilePage from './components/profile/profile';
import HistoryPage from './components/History/history';
import NotFoundPage from './components/NotFoundPage';
import Templates from './components/Templates';
import SocialMediaConnect from './components/AccountsPage/SocialMediaConnect';
import FacebookCallback from './components/FacebookCallback';
import SocialMediaPost from './components/SocialMediaPost/SocialMediaPost';
import SocialPostForm from './components/SocialPostForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" Component={LoginForm} />
          <Route exact path="/" Component={DashBoard} />
          <Route exact path="/sign-up" Component={SignUpForm} />
          <Route exact path="/forgot-paswd" Component={PasswordRecovery} />
          <Route exact path='/verification' Component={VerificationPage} />
          <Route exact path='/set-new-paswd' Component={SetNewPassword} />
          <Route exact path='/add-accounts' Component={AccountsPage} />
          <Route exact path='/sharePost' Component={SharePostPage} />
          <Route exact path='/thankYouPage' Component={ThankYouPage} />
          <Route exact path='/profile' Component={ProfilePage} />
          <Route exact path='/history' Component={HistoryPage} />
          <Route exact path='/facebook-callback' Component={FacebookCallback} />
          <Route exact path='/linkedin-callback' Component={LinkedInCallback} />
          <Route exact path='/post' Component={SocialPostForm} />
          <Route path="*" Component={NotFoundPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
