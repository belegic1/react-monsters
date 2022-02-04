import React, {Component} from "react"
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField : ""
    }

    //   this.handleChange = this.handleChange.bind(this)
  }

    
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
    .then(data => this.setState({...this.state, monsters: data}))
  }
    handleChange(e) {
        this.setState({ ...this.state, searchField: e.target.value })
    }
    filterMonsters() {
        return this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    }
    render() {
        // const {monsters,searchField} = this.state
      const filteredMonsters = this.filterMonsters()
    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox placeholder="search monsters" handleChange={this.handleChange.bind(this)} />
            <CardList monsters={filteredMonsters} />
          
        </div>
    )
  }
}

export default App;
