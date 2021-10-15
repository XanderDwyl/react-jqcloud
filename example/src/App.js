import ReactJQCloud from 'react-jqcloud';
import './App.css';
import './jqcloud.css';

const word_list = [
  { text: "Lorem", weight: 3 },
  { text: "Ipsum", weight: 1.5 },
  { text: "Dolor", weight: 9.4 },
  { text: "Sit", weight: 8 },
  { text: "Amet", weight: 6.2 },
  { text: "Consectetur", weight: 25 },
  { text: "Techonology", weight: 75 },
  { text: "Covid", weight: 35 },
  { text: "Hacktoberfest", weight: 5 },
  { text: "2021", weight: 5.3 },
  { text: "Election", weight: 5 },
  { text: "Philippines", weight: 35 },
  { text: "Typhoon", weight: 3.89 },
  { text: "Infected", weight: 9 },
  { text: "Recovery", weight: 20 },
  { text: "Vaccine", weight: 24 },
  { text: "Pandemic", weight: 6 }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        JQCloud Demo
      </header>
      <div className="App-body">
        <ReactJQCloud word_array={word_list}/>
      </div>
    </div>
  );
}

export default App;
