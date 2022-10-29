// import Layout from '../layout/Layout';
import { Routes, Route } from 'react-router-dom';
// Layout
import Layout1 from '../layout/Layout1';
import AdminPage from '../layout/Admin';
// Page
import Home from '../page/Home';
import Admin from '../admin/Admin';
import TetlaTet from '../page/TetlaTet';
import Mltx from '../page/Mltx';

function App() {
  return (
    // <Layout />
    <Routes>
      {/* Page */}
      <Route path='/' element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mltx' element={<Mltx />} />
      </Route>
      {/* Admin */}
      <Route path='/admin' element={<AdminPage />}>
        <Route index element={<Admin />} />
      </Route>
      <Route path='/tetlatet' element={<TetlaTet />} />
    </Routes>
  );
}

export default App;
