import AppRoutes from './router';
import Navbar from './components/Navbar/Navbar';
import './styles/reset.css';

export function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
