import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  let nome = "Carlos"
  return (
    <div className="App">
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Estevan"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Estevan" idade="25" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
