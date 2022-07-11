import './App.css';
import { render } from '@testing-library/react';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import { useEffect, useState } from 'react';

const App = () => {

  const [searchWord, setSearchWord] = useState('')
  const [monsters, setMonsters] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      setMonsters(users)
    })
  }, [])
  
  const onChangeHandler = (event) => {
    const searchWordString = event.target.value.toLocaleLowerCase();
    setSearchWord(searchWordString)
    
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchWord)
  })

  return (
    <div className="App">
    <h1 className='app-title'>Monster Rolodex</h1>
    <SearchBar onChange={onChangeHandler} className='search-bar'/>
    <CardList monsters={filteredMonsters}/>
  </div>
  )
}


export default App;
