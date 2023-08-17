// Import data

// Import components
import './App.css';
import Header from './Componets/Header.jsx';
import Gallery from './Componets/Gallery.jsx';
import Sidebar from './Componets/Sidebar.jsx';

function App() {
  return (
    <div style={{display: 'flex', }}>
      <Sidebar />
      <div>
      <Header />
      <Gallery />
      </div>


    </div>
  );
}

export default App;
