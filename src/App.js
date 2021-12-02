import React, {useState} from 'react';
import './App.css';


const App = () => {


  let array = ['philip', 'bob', 'doog', 'dougly', 'di', 'daff', 'diff', 'delski', 'doe', 'di', 'dum', 'diddly', 'dingus', 'cat', 'lily', 'lance', 'elf', 'eve', 'bill', 'court', 'dude', 'like', 'what']
  let suggestion = []


  const [value, setValue] = useState()
  const [list, setList] = useState()
  const setInputValue = (e, name) => {
      setValue(name)
  }

  const autoComplete = (event) => {
    setValue(event.target.value)
    array.forEach(name => {
      if(
        name.substr(0, event.target.value.length).toUpperCase() === 
                    event.target.value.toUpperCase()
        )
      {
        suggestion.push(name)
        console.log(suggestion)
        setList(
          suggestion.map((name, index) => {
              return <p key={index} onClick={(e) => setInputValue(e, name)}>{name}</p>
          })
        )
      }

      if(event.target.value.length === 0) {
        setList('')
      }

    })
  }



  return (
    <div className="App">

      <input className="autoComp" onChange={(e) => autoComplete(e)} value={value}/>
      <div className='suggestions'>
          {list}
      </div>

    </div>
  );
}

export default App;
