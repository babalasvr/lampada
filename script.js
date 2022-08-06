var ligar1 = document.getElementById('btn1');
let ligado = document.getElementById('img');
let ligado2 = document.getElementById('img2');
let quebrado = document.getElementById('img3');


function ligar()
{
    if(quebrado.style.display != 'flex'){
        ligado.style.display = 'none';
        ligado2.style.display = 'flex';
    }
}

function desligar()
{
    if(quebrado.style.display != 'flex'){
        ligado.style.display = 'flex';
        ligado2.style.display = 'none';
    }
}

function encima()
{
    if(quebrado.style.display != 'flex'){
        ligado.style.display = 'none';
        ligado2.style.display = 'flex';
    }
}

function fora()
{
    if(quebrado.style.display != 'flex'){
        ligado.style.display = 'flex';
        ligado2.style.display = 'none';
    }
}

function quebrar()
{
    ligado.style.display = 'none';
    ligado2.style.display = 'none';
    quebrado.style.display = 'flex';
    alert('quebrou a lampada')
}