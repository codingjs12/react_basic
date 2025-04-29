// Menu.js
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Menu() {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("실행 중!");
    }, 1000);

    return ()=>{
      clearInterval(timer);
      console.log("타이머 종료!!(클린 업)");
    }
  }, []);
  return (
    <nav style={{ margin: "30px", fontSize: "40px" }}>
      <ul>
        <li><Link to="/app">App.js</Link></li>
        <li><Link to="/state">State.js</Link></li>
        <li><Link to="/effect">Effect.js</Link></li>
        <li><Link to="/product">ProductMain.js</Link></li>
        <li><Link to="/review">Review.js</Link></li>
        <li><Link to="/ref">Ref.js</Link></li>
        <li><Link to="/context">Context.js</Link></li>
        <li><Link to="/main">Context22222222.js</Link></li>
        <li><Link to="/feed">Context22222222.js</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;