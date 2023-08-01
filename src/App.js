// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

// create variable called tasks - an array of different objects and this will be different tasks of dummy data to display them on the screen - eventually this will be deleted and we will just interact with UI using the React app itself
const tasks = [
  // four objects - set tasklist below to tasks variable
  {
    id: 1,
    title: "One",
    description: "id number 1, true",
    completed: true,
  },
  {
    id: 2,
    title: "Two",
    description: "id number 2, false",
    completed: false,
  },
  {
    id: 3,
    title: "Three",
    description: "id number 3, true",
    completed: true,
  },
  {
    id: 4,
    title: "Four",
    description: "id number 1, false",
    completed: false,
  },

]

class App extends Component {
  // constructor takes props
  constructor(props) {
    super(props);
    this.state={
      // first key
      viewCompleted:false,
      // second key
      taskList: tasks,
    }; 
  }
  // now we need to set completed tasks to check if the task is completed, then viewcompleted will be set to true - by default that viewcompleted will be set to false
  // we will do that by creating a property called displayCompleted = an arrow funtion that takes the stages as a parameter a
  displayCompleted = status => {
    // and will return one of two things
      // if status is true
    if (status) {
      return this.setstatus({ viewCompleted:true });
    }
    // else return incompleted
      return this.setstatus ({ viewCompleted:false });
  }
  // second property - this will render two spans which will help control which set of items are displayed - ie clicking on completed tab will show completed tasks and the same thing for incompleted tasks
  // also will be an arrow function
  renderTabList = () => {
    return (
      // div with the className - 
        // this is a boostrap class my-5 or m on the y-axis margin on the y-axis of 5 pixels 
          // called tab-list
      <div className="my-5 tab-list">
        {/* we have a span, with an onClick property with an arrow function that returns displayCompleted to true */}
        <span
          onClick={() => this.displayCompleted(true)}
        // then we have a className that is set to ternary expression (in this case a condition), 
        // if this is true then active if not then empty string
          className={this.state.viewCompleted ? "active" : ""}
        >
          {/* this  will be in form of a button */}
          completed
            </span>
        <span
          onClick={() => this.displayCompleted(false)}
          // if this is false or default then empty string if not then make it active
          className={this.state.viewCompleted ? "" : "active"}
        >
          incompleted
            </span>
      </div>
    );
  };

  // render all items on the list completed || incompleted
  renderItems = () => {
    const { viewCompleted } = this.state;
    // use array method filter
    const newItems = this.state.taskList.filter(
    // take in parameter - filter the completed item must be equal to viewCompleted
      item => item.completed === viewCompleted
      );
    // then what you want to do next is return newItems, while mapping each item - map is another array function which calls a callback function taking item as a parameter
    // we will return the key and title each item has



  return newItems.map(item => (
    <li
    key={item.id}
    className="list-group-item d-flex justify-content-between align-items-center"
  > </li>
    )
  );


};

  render() {
    return (
      <main className='context'>
        <h1 className='text-black text-uppercase text-center my-4'> Title Of Project</h1>


      </main>
    )
  }

}

export default App;
