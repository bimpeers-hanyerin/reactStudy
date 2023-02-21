import logo from './logo.svg';
import './App.css';

function App() {
  let post='고랭고랭나시고랭';
  var data='blue'
  return (
    <div className="App">
      <div className="black-nav">
        <h2>Koraeng - ReactStudy</h2>
        <div>{ post }</div> 
      </div>

      <div className={data} style={{ color:'blue', fontsize:'20px' }}>배고파</div>
    </div>
  );
}

export default App;
