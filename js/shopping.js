function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product+'-number');
    let productNumber = parseInt(productInput.value);
    if(isIncreasing == true){
        productNumber = productNumber +1;
    }
    else if(productNumber > 0){
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    // update total 
   const productTotal = document.getElementById(product+'-total');
   productTotal.innerText = productNumber * price; 

//    calculate Total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    // subTotal calculation
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') *59;
   const subTotal = phoneTotal+ caseTotal;
    // tax ammount

    const taxAmount = subTotal * 0.1;
    const totalAmount = taxAmount + subTotal;
// Update on th UI 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalAmount;
 }

// handel phone increase and decrease event
    document.getElementById('phone-plus').addEventListener('click',function(){
        updateProductNumber('phone',1219,true);
    });

    document.getElementById('phone-minus').addEventListener('click',function(){
        updateProductNumber('phone', 1219, false);
    })

// handel case increase & decrease event
document.getElementById('case-plus').addEventListener('click',function(){

    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
});