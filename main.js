import './style.css'
import { changeTitle, logQntPart } from "./components/CreateGame"


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
                
                <div id = "world" class = "matter-div">
                     
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