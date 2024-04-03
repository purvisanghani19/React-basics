import './App.css';
import Picture from './practice/Picture';
import Dateandtime from './practice/Dateandtime';

function App() {

  return (
    <div className="App">

      {/* <div class="container">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Date and Time</h5>
            <a href=''></a>
          </div>
        </div>
      </div> */}

      <Dateandtime />
      <Picture />


    </div>
  );
}

export default App;
