import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';


function App() {

const [linea1, setLinea1] = useState('Linea 1');
const [linea2, setLinea2] = useState('Linea 2');
const [imagen, setImagen] = useState('fray');



const onChangeLinea1 = function(evento){    
    setLinea1(evento.target.value) 
   }
   const onChangeLinea2 = function(evento){    
    setLinea2(evento.target.value) 
   }
   const onChangeImagen = function(evento){    
    setImagen(evento.target.value) 
   }
   const onClickExportar = function(evento){    
     alert('Exportar')
     html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("img/png");

      var link = document.createElement('a');
      link.download = 'Meme.png'
      link.href = img;
      link.click();

    });
   }

  


  return (
    <div className="App">


      <select onChange={onChangeImagen} >
        <option value="fray">Fray</option>
        <option value="bts">K-pop bts</option>
        <option value="fraysuspicius">Fray Suspicius</option>
        <option value="heman">Heman</option>
        <option value="congelado">El resplandor-congelado</option>
        <option value="rene">Kermit</option>
        <option value="what">Whats</option>
        <option value="wiilly">Willy wonka</option>
        <option value="donramon">Don Ramon</option>
        <option value="hacha">El resplandor-Hacha</option>
        <option value="noMeDigas">Nicolas Cage - No me digas</option>
        <option value="pabloescobar">El Patron</option>
        <option value="psicosis">Psicosis</option>
      </select><br/>

      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br/>
      <button onClick={onClickExportar} >crear Meme</button>


      <div class="flexbox">
      <div id="meme" >
        <span class="up">{linea1}</span><br/>
        
        
        <img alt="" class="imgMeme"src={"https://aguilar.digital/app-memes/img/" + imagen + ".jpg"}/><br/>

        
        <span class="down">{linea2}</span>
        

      </div>
      </div>
      





    </div>
  );
}

export default App;
