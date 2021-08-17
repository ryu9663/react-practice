import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox';
import Memo from './Memo';
import DummyMemo from './DummyMemo';
function Header(){
  return (
  <header>
  <h1>나의 메모 앱</h1>
  </header>
  )
}

function App() {
  
  console.log(filteredMemo)
  return (
   <div className = 'App'> 
     <Header />
     <Checkbox />
     
   </div> 
  );
}

export default App;
