import React, {useState} from 'react';
import './App.css';
import FormComp from "./component/FormCompo";
import FormL from "./component/FormListCompo";

function App() {
  let [inputText, setInputText] = useState('');
  return (
    <div className="App container">
  
       <FormComp inputText={inputText} setInputText={setInputText}/>
       <FormL/>

    </div>
  );
}

export default App;
