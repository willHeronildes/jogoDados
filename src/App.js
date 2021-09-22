import React, {Component} from 'react';
import dum from'./assets/um.png';
import dois from'./assets/dois.png';
import tres from'./assets/tres.png';
import quatro from'./assets/quatro.png';
import cinco from'./assets/cinco.png';
import seis from'./assets/seis.png';
import './estilo.css';


class App extends Component{

  constructor(props){
      super(props);
      this.state = {
          dadoSorte: <img src={dum} className='img'/>,

      };

      this.giarDado = this.giarDado.bind(this);

      this.dados = [<img src={dum} className='img'/>, 
      <img src={dois} className='img'/>, 
      <img src={tres} className='img'/>,
      <img src={quatro} className='img'/>,
      <img src={cinco} className='img'/>,
      <img src={seis} className='img'/>     ];


  }

  giarDado(){
     let satate = this.state
     let dadoAleatorio = Math.floor(Math.random()* this.dados.length);
     this.state.dadoSorte = this.dados[dadoAleatorio];
     this.setState(this.state);
     

  }


   render(){
     return(
       
       <div className="container">    
         <h3 className="dadoSorte">{this.state.dadoSorte}</h3>
         <Botao nome="Girar Dado" aperBotao={this.giarDado}/>
       </div>
     );
   }

}

class Botao extends Component{
    render(){
      return(
        <div className="Botao">
         
        <a onClick={this.props.aperBotao}>{this.props.nome}</a>
          
        </div>
      );

    }

}

export default App;