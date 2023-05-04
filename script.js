function Confirmar() 
{
    texto = nome.value 
    teste.innerHTML = texto 
}

function MostrarJanela() 
{
    janelinha.style.display = "block"
}

function Fechar() 
{
    janelinha.style.display = "none"
}

soma = 0 
function Somar() 
{
    soma = soma + 1
    resultado.value = soma
}   

function Imprimir() 
{
    window.print();
}  