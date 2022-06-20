import { AnimatePresence } from 'framer-motion';
import './App.css';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <PrivateRoute />
    </AnimatePresence>
  );
}

export default App;
