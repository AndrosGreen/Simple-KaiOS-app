import React from 'react';

class PokeSelector extends React.Component {

    state = { pokeID : "", pokeURL : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}

    zeroPad = (num, places) => String(num).padStart(places, '0');

    onClickSearch = () => {
        var id = parseInt(this.state.pokeID);
        
        var poke_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.zeroPad(id,3) + ".png";
        this.setState({pokeURL:poke_url});
    }

    render(){
        return(
            <div className="container">
                <h2 style={{textAlign : "center"}}>Pokedex</h2>
                No. Pokemon:
                <input 
                    className="form-control" 
                    type="number" 
                    value={this.state.pokeID} 
                    onChange={ e => this.setState( {pokeID: e.target.value} )}  
                />

                <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{marginRight: "5px", marginTop: "10px"}}
                    onClick={this.onClickSearch}
                >
                    Buscar
                </button>
                <br/>
                <img src={this.state.pokeURL} />
            </div>
        );
    }
}

export default PokeSelector;