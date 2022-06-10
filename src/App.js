import { useState } from 'react';
import './App.css';


function App() {
  const [kingKongSize, setKingKongSize] = useState(10);
  const [GodZillaSize, setGodZillaSize] = useState(10);

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
    </div>
  );
}

export default App;
