import './App.css';
import ParentComponent from './components/ParentComponent';
import Display from './components/Display';
import Button from './components/Button';
import  {useState}  from 'react';

function App() {
  const [data,setData]=useState('')
  function handleClick(val){
    if(val==='='){
      setData(eval(data));
    }
    else if(val==='AC'){
      setData("");
    }
    else if(val==='<x'){
      let res=data+'';
      setData(res.slice(0,-1))
    }
    else{
      setData(data+val);
    }
  }
  return (
    <div>
      <ParentComponent>
        <Display data={data}></Display>
        <Button btnClick={handleClick}></Button>
      </ParentComponent>
      </div>
  );
}

export default App;
