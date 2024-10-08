import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PercentPage from './components/PercentPage';
import LoginPage from './components/LoginPage';
import VanGoghPage from './components/VanGoghPage';
import StarryNight from './components/StarryNight';
import SunFlower from './components/sunflower';
import Self from './components/SelfPage';
import Self2 from './components/Self2Page';
import DocentSelect from './components/DocentSelect';
import SurveyPage from './components/SurveyPage';
import ChatBotPage from './components/chatApp';
import LoginPopup from './components/LoginPopup';
import SignUpPage from './components/SignUp';
import SignPage from './components/SignPage';
import LastPage from './components/LastPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PercentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select" element={<DocentSelect />} />
        <Route path="/survey/:alt" element={<SurveyPage />} />
        <Route path="/gogh/:author_answer/:museum_answer" element={<VanGoghPage />} />
        <Route path="/starry/:author_answer" element={<StarryNight />} />
        <Route path="/sunflower/:author_answer" element={<SunFlower />} />
        <Route path="/self/:author_answer" element={<Self />} />
        <Route path="/self2/:author_answer" element={<Self2 />} />
        <Route path="/chatbot/:author_answer/:museum_answer" element={<ChatBotPage />} />
        <Route path="/assign" element={<LoginPopup />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/last" element={<LastPage />} />
        
      </Routes>
    </Router>      
  );
}

export default App;
