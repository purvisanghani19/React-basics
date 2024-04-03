import './App.css';
import Picture from './practice/Picture';
import Dateandtime from './practice/Dateandtime';
import Miniproject from './practice/Miniproject';

function App() {

  return (
    <>
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
      <Miniproject />

    </>




  );
}

export default App;
