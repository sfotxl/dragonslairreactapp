import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import HealthPage from './pages/HealthPage';
import ContactPage from './pages/ContactPage';
import VendorPage from './pages/VendorPage';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <div className='App bg-dark text-light'>
      <PageContainer>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/health' element={<HealthPage />} />
          <Route path='/vendor' element={<VendorPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
