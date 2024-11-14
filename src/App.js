import logo from './logo.svg';
import './App.css';

import StepWizard from './components/StepWizard/StepWizard';

function App() {

  const steps = [
    {
      title:"Step 1",
      content: (
        <div>
          <label>Name:</label>
          <input type='text'></input>
        </div>
      )
    },
    {
      title:"Step 2",
      content: (
        <div>
          <label>Hola Mundo:</label>
        </div>
      )
    },    
    {
      title:"Step 3",
      content: (
        <div>
          <label>Dale submit!!:</label>
        </div>
      )
    },
  ]
  return (
    <div className="App">
     <StepWizard steps={steps}></StepWizard>
    </div>
  );
}

export default App;
