import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      < Navbar title="TextUtilzz" />
      <div className="container cdesign my-3">
        <TextForm heading="Try TextUtilz | Word Counter | Char Counter | Convert Case " />
      </div>
    </>
  );
}

export default App;
