import './style.css'
import { changeTitle } from "./components/CreateGame"


document.querySelector('#app').innerHTML = `
  <!doctype html>
<html>
    <head>
        <title id = "title">Sorteio</title>
        <link rel="stylesheet" href="/index.css">
    </head>
    <body>
        <script type="module" src="/index.js"></script>
        <head>
            <h1 id = "txt-nome">Sorteio</h1>
        </head>
        <main>
            <div class ="container">
                <div class = "div-options">
                  <div id = "step1" class = "editar">
                      <label class="dist-item" style="color:black">Digite o nome do sorteio</label>
                      <input id = "nome-sorteio"type = "text" class="dist-item">
                      <label class="dist-item" style="color:black">Informe o número de participantes</label>
                      <input id = "numero-participantes" class="dist-item" type = "number" max = "30" min = "2" value="2">
                      <button id = "btn-criar" class = "btn-criar dist-item">Criar sorteio</button>
                  </div>
                  
                  <div id = "step2" class = "inserir">
                      <p style="color:black">Insira os nomes dos participantes</p>
                      <div id="div-nomes">
                      </div>
                      <button id = "btn-sortear" class = "btn-criar">Sortear</button>
                  </div>
                </div>
                <div>
                    <div id = "world" class = "matter-div">
                        <svg width="300" 
                        height="300" 
                        viewBox="0 0 300 300" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path id = "svg" d="M0 150C0 229.482 61.8197 294.526 140 299.672V294.661C64.5834 289.524 5 226.72 5 150C5 69.9187 69.9187 5 150 5C230.081 5 295 69.9187 295 150C295 226.72 235.417 289.524 160 294.661V299.672C238.18 294.526 300 229.482 300 150C300 67.1573 232.843 0 150 0C67.1573 0 0 67.1573 0 150Z" fill="black"/>
                        </svg>
                    </div>
                    <button class = "btn-girar">Girar!!!</button>   
                </div>
                <div id = "resultado" class = "sorteados">
                    <h3>Ganhadores:</h3>
                </div>
            </div> 
            
        </main>
        <footer>
        </footer>
    </body>
</html>
`
changeTitle(document.querySelector("#btn-criar"), document.querySelector("#btn-sortear"))
// changeTitle(document.querySelector("#txt-nome"), document.querySelector("#nome-sorteio").textContent)