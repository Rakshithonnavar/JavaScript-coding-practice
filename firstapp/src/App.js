import logo from './logo.svg';
import './App.css';

// function Heading(){
// {
//     return (
//         <h1>This is an h1 heading</h1>
//     )
// }
// }

// function App()
// {
//     return (
//         <div  className="App">
//             This is the stating code for "Your first Component" ungraded lab </Heading>
//             <Heading/>
//             </div>
//     );
// }
// }
// function learn()
// {
//      return(
//         <div classname="App">
//           This is starting code for my react learning course <Heading/> 
//         <h6>My name is Rakshit</h6>
//         </div>
//      );
// }
// export default App;
// function Header()
// {
//     return <h1>Hello World</h1>;
// }

// function App(){
//     return <Header/>;
// }

// export default App;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
