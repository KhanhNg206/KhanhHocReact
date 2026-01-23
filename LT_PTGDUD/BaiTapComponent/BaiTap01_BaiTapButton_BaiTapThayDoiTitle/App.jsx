import Counter from "./components/Counter";
import TitleExample from "./components/TitleExample";
import Mycomponent from "./components/MyComponent";
import "./App.css";


function App() {
  return (
      <div className="container_cpn">
        <div className="div_exam">
          <h1>Bài tập 1</h1>
          <Mycomponent/>
        </div>
        <div className="div_exam">
           <h1>Bài tập : tạo nút tăng giảm reset</h1>
          <Counter/>
        </div>
        <div className="div_exam">
           <h1>Bài tập thay đổi title</h1>
           <h3>ấn để thay đổi title</h3>
          <TitleExample/>
          </div>
      </div>
    
  );
}

export default App;
