let total=document.getElementById('total')
let amount=0
function take(){
    amount=amount-1000
    total.innerHTML=amount
}
function give(){
    amount=amount+1000
    total.innerHTML=amount
}

function double(){
    amount=amount*2
    total.innerHTML=amount
}

function reset(){
    amount=0
    total.innerHTML=amount
}