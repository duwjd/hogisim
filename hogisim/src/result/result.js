
import '../App.js';
import './search.css';

function result() {
  return (
    <div>
        <div className = "container">
        <div className="one">
            <p>뜻 들어가는 공간</p>
        </div>
        <div className="two">
            <p className = "cat_title">분야 태그 들어가는 공간</p>
        </div>
        <div className="three">
            <p className = "cat_title">사용량</p>
                <div className="donut" data-percent="85.4"></div>
        </div>
        <div className="four">
            <p className = "cat_title">예문 들어가는 공간</p>
        </div>
        
    </div>
    </div> 
  );
}

export default result;
