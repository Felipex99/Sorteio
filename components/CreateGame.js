import Matter from "matter-js"
import { Svg } from "matter-js"
import { decomp } from "poly-decomp"
import $ from 'jquery'

Matter.Common.setDecomp(decomp);


let qnt_part = 0
let array = []
let bola_participante = [{}]
const SVG_PATH_URNA = "#matter-urna"

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function changeTitle(elementId,element2Id){    
    const titulo = document.querySelector("#txt-nome")
    const inputTitulo = document.querySelector("#nome-sorteio")
    const num_participantes = document.querySelector("#numero-participantes")
    const div_participantes = document.querySelector("#div-nomes")
    const div_world = document.querySelector("#world")
    elementId.addEventListener("click", () =>{ 


        if (isNaN(num_participantes.value) || num_participantes.value<2){
            alert("Números de participantes deve ser maior que 1")
        }else{
            titulo.innerHTML = inputTitulo.value
            qnt_part = parseInt(num_participantes.value)
            div_participantes.innerHTML=''
            for(let i = 0; i < qnt_part;i++){
               const p = document.createElement('p')
               p.textContent = "Nome do "+(i+1)+"° participante:"
               p.style.color="black"
               p.style.marginBottom=0
               const nomeInput = document.createElement('input')
               nomeInput.type = 'text'
               nomeInput.id = "nome"+i
               div_participantes.appendChild(p)
               div_participantes.appendChild(nomeInput) 
            }
        }
    })

    element2Id.addEventListener("click", () =>{
        array = []
        bola_participante = []
        div_world.innerHTML = ''
        const divInputs = div_participantes.querySelectorAll('input[type = "text"]')
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Common = Matter.Common,
            Bodies = Matter.Bodies,
            Svg = Matter.Svg,
            Vector = Matter.Vector,
            Vertices = Matter.Vertices,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint
        var engine = Engine.create()
        var render = Render.create({
            element: document.querySelector("#world"),
            engine: engine,
            options:{
                width:600,
                height:600,
                wireframes:false,
                background:"#ffffff"
            }
        })
        
        createSvgBodies()

        divInputs.forEach(nome =>{
            array.push(nome.value)
        })

        var mouse = Mouse.create(render.canvas),
            mouseConstraints = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness:0.2,
                    render:{
                        visible:false
                    }
                }
            })
        var ground = Bodies.rectangle(400, 610, 810, 60,{
            isStatic:true, 
            render:{
                fillStyle:"#47d147"
            }})
        
        for(let i = 0; i<qnt_part;i++){
            var cor = getRandomColor()
            var bola = Bodies.circle(300,300,15,{
                render:{ fillStyle:cor}
            },30)
            bola_participante.push({nome:document.querySelector("#nome"+i).value, bola: bola.id})
            Composite.add(engine.world,[bola,ground])
        }
        console.log(bola_participante, cor)

        Composite.add(engine.world, mouseConstraints)


        async function createSvgBodies(){
            console.log("AAAAAAAAAAAAAAAAAAA")
            let arrV = []
            var svg = document.querySelector("#svg")
            $("#svg").
                find("path").
                each(function (path,i){
                    console.log(path)
                    var v = Bodies.fromVertices(
                        300,
                        80,
                        Svg.pathToVertices(path,5))
                arrV.push(v)
                console.log(v)
            })
            Composite.add(engine.world, arrV)
        }
        Render.run(render);
        render.mouse = mouse

        //DEFININDO A MASK COLLISION DO MOUSE
        
        mouseConstraints.collisionFilter.mask = 0x0002
        var runner = Runner.create();

        Runner.run(runner,engine);
            console.log(array)
        })

    return qnt_part, array;
}