import React from 'react';
import Calculator from './Calculator';
import PokeSelector from './PokeSelector';

class App extends React.Component {

    render(){
        return (
            <div>
                <Calculator/>
                <PokeSelector/>
            </div>
        );
    }
}

export default App;