import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Page from './Pages/Page';
import Layout from './Layout/Layout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path=':routeParams' element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App;
