import React,{useState} from 'react';
import Search from '../Search'
import Filter from '../Filter'

const Index =()=>{

    const [inputText, setInputText] = useState("");

    const inputHandler = (e) => {
      //convert input text to lower case
      const lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }

    return (
        <>
        <div className="row">
        <Search inputHandler={inputHandler} />
        </div>
        <div className='row'>
        <Filter input={inputText} rows={20} />
        </div>
        </>
    )
}

export default Index;