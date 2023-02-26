import AppRoutes from './router';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { HOME_PAGE_MENU } from './constants/menu';
import './styles/reset.css';

export function App() {
  return (
    <>
      <Navbar />
      <Sidebar items={HOME_PAGE_MENU}>
        <AppRoutes />
      </Sidebar>
    </>
  );
}

export default App;
