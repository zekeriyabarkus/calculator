const input1=document.getElementById('input1');
const input2=document.getElementById('input2');
const output=document.getElementById('output');
const buttons=document.querySelectorAll('.btn');
const acButton=document.getElementById('ac');

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const operation=button.getAttribute('data-operation');
        const num1=parseFloat(input1.value);
        const num2=parseFloat(input2.value);

        if(isNaN(num1) || isNaN(num2)){
            output.textContent='Syntax error';
            return;
        }

        let result;
        switch (operation){
            case '+':
                result=num1+num2;
                break;
            case '-':
                result=num1-num2;
                break;
            case '*':
                result=num1*num2;
                break;
            case '/':
                result=num2 !== 0 ? num1/num2 : 'Hata';
                break;
        }

        output.textContent=result;
    });
});

acButton.addEventListener('click',()=>{
    input1.value='';
    input2.value='';
    output.textContent='';
});




