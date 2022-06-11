import { useState } from 'react';
import './App.css';
import SignLight from './SignLight.js';
import CarsList from './CarsList.js';


function App() {
  const [kingKongSize, setKingKongSize] = useState(10);
  const [GodZillaSize, setGodZillaSize] = useState(10);
  const [lightColor, setLightColor] = useState('red');
  const [traffic, setTraffic] = useState(['car0', 'car1', 'car2', 'car3', 'car4']);

  return (
    <div className="App">
      <div className='fight'>
        <div className='monster'>
          <img src="kong.png" width={21 * kingKongSize} />
          <div className='buttons'>
            <button onClick={() => setKingKongSize(kingKongSize + 1)}>Kong grows stronger</button>
            <button onClick={() => setKingKongSize(kingKongSize - 1)}>kong weakens</button>
          </div>
        </div>
        <div className='monsters'>
          <img src="godzilla.png" width={13 * GodZillaSize} />
          <div className='buttons'>
            <button onClick={() => setGodZillaSize(GodZillaSize + 1)}>godzilla grows stronger</button>
            <button onClick={() => setGodZillaSize(GodZillaSize - 1)}>godzilla is weak</button>
          </div>
        </div>
      </div>


      <SignLight color={lightColor} />
      <div className='buttons'>
        <button onClick={() => setLightColor ('red')}>sorry we are closed</button>
        <button onClick={() => setLightColor ('green')}>welcome we are open</button>
      </div> 


      <CarsList cars={traffic} />
      <div className='buttons'>
        <button onClick={() => setTraffic([...traffic, 'car0'])}>add car to race</button>
        <button onClick={() => setTraffic([...traffic, 'car1'])}>add car to race</button>
        <button onClick={() => setTraffic([...traffic, 'car2'])}>add car to race</button>
        <button onClick={() => setTraffic([...traffic, 'car3'])}>add car to race</button>
        <button onClick={() => setTraffic([...traffic, 'car4'])}>add car to race</button>
      </div>




      
      








    </div>
  ); 
} export default App;

    

           

    
    