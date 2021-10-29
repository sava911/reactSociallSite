import './App.css';

const App = () => {
  return (
    <div className="App">
     save HTML
     <Header/>
     <Technologic/>
   
    </div>
  );
}
const Header = () => {
  return (
    <div className="App">
     save header
      <ul>
        <li>home</li>
        <li>sms</li>
        <li>lost</li>
        <li>body</li>
      </ul>
    </div>
  );
}
const Technologic = () => {
  return (
    <div className="App">
       <ul>
        <li>HTML</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}
export default App;
