let operationNameInp = document.getElementById("operationName")
let operationAmountInp = document.getElementById("operationAmount")
let operationSaveBtn = document.querySelector(".save-btn")
let operationList = document.querySelector(".operation-list")
let profitBox = document.getElementById("profitBox")
let lossBox = document.getElementById("lossBox")
let balanceBox = document.getElementById("balance")
let totalAmount = 0
let profitAmount = 0;
let lossAmount = 0;

function handleOperation() {
    let userOperationNameText = operationNameInp.value;
    let userOperationAmount = operationAmountInp.value;
    let operationClassName = userOperationAmount < 0 ? "loss-box" : "profit-box";

    if(userOperationAmount < 0) {
        lossAmount += Math.abs(parseFloat(userOperationAmount))
        lossBox.innerHTML = `$ ${lossAmount}`
    }else {
        profitAmount += parseFloat(userOperationAmount);
        profitBox.innerHTML = `$ ${profitAmount}`
    }

    totalAmount = profitAmount - lossAmount

    balanceBox.innerHTML = `$${totalAmount}`

    operationList.innerHTML += `
        <li class="operation-item ${operationClassName}">
            <button class="remove-btn">🚮</button>
            <span>${userOperationNameText}</span>
            <span>${userOperationAmount}$</span>
        </li>
    `

}

operationSaveBtn.addEventListener("click", handleOperation)