import Sidebar from 'modules/shared/components/Sidebar';
import FilterProvider from 'modules/shared/contexts/FilterContext';
import { ScreenSizeProvider } from 'modules/shared/contexts/ScreenSizeContext';
import TasksProvider from 'modules/shared/contexts/TasksContext';
import Home from './pages/Home';
import './scss/main.scss';

function App() {
  return (
    <ScreenSizeProvider>
      <FilterProvider>
        <TasksProvider>
          <Sidebar />
          <Home />
        </TasksProvider>
      </FilterProvider>
    </ScreenSizeProvider>
  );
}

export default App;
