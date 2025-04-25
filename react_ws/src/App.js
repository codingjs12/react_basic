import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
  let list = [
    {subId : 1, subName : "java"},
    {subId : 2, subName : "html"},
    {subId : 3, subName : "oracle"},
    {subId : 4, subName : "react"}
  ];

  let numList = [1,3,5,2,4];
  
  return (
    <div className="App">
      <Header title="헤더다 !!" contents="과목을 보여줍니다." fnHeader={(contents)=>{
        alert(contents);
      }}></Header>
      <Header title="프로그래밍 재밌다!" fnHeader={(text) => {}}></Header>
      <Body list={list} fnBody={(subName) => {
        alert(subName);
      }}></Body>

      <Body list={list} fnBody={(subName) => {
        alert(subName + "입니다.");
      }}></Body>

      <Footer list={numList} fnFooter={(item) => {
        alert(item);
      }}></Footer>
    </div>
  );
}

export default App;
