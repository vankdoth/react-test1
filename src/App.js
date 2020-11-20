import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
    { name: 'vijay', age: 28 },
    { name: 'vikki', age: 27 },
    { name: 'martha', age: 27 }
    ],
    otherState: 'some value',
    showPersons: false
    };

  //switchNameHandler = (newName) => {
     // console.log('clicked');
     //this.state.persons[0].name = 'vankdoth vijay';
  //   this.setState ( {
  //         persons: [
  //            { name: newName, age: 25 },
  //            { name: 'vikki', age: 24 },
  //            { name: 'martha', age: 26 }
  //            ]
  //            } );
  //}


  nameChangedHandler = (event) => {
      this.setState ( {
            persons: [
               { name: 'vijay', age: 25 },
               { name: event.target.value, age: 24 },
               { name: 'martha', age: 22 }
               ]
               } )
  }

    deletePersonHandler = (personIndex) =>{
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});


  }

  render() {
   const style ={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
   };

   let persons = null;

   if (this.state.showPersons) {
   persons = (
         <div>
          {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
           name={person.name}
            age={person.age} />
          } ) }
          </div>
   );
   }

  return (
    <div className="App">
      <h1> hello , trial</h1>
      <p> second para</p>
      <button
       style={style}
       onClick={this.togglePersonsHandler}> Toggle </button>
       {persons}
    </div>
  );
  }
}

export default App;




