
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className = "top">
            <span>호기심 천국</span>
        </div>
      </header>
      <div className='search'>
        <form>
          <input className='searchInput'></input>
          <button className='searchButton'>검색</button>
        </form>
      </div>

      <div className = 'section1'>
        <div className='Rank1'></div>
        <div className='Rank2'></div>
        <div className='Rank3'></div>
      </div>
    </div> 
  );
}

export default App;
