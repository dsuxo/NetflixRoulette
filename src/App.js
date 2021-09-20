// import './App.css';
// import Counter from './components/counter/counter'
// import Search from './components/search/search';
// import Genre from './components/genre/genre';

// function App() {
//   return (
//     <div>
//       <Counter />
//       <Search />
//       <Genre />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Counter from './components/counter/counter'
import Search from './components/search/search';
import Genre from './components/genre/genre';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Search />
        <Genre />
      </div>);
  }
}

export default App;
