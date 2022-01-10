let i = 0 ;
let code =0;
let btn = document.querySelectorAll('#btn');

let cancel = document.getElementById('cancel');
let password = document.querySelectorAll('.circle');



const checkPin = (pin) => { 
      code = code *10;
       code += pin;
    if(code == 1234){
          setTimeout(function(){
            document.getElementById('lock_screen').classList.add('d-none');
            document.getElementById('unlock').classList.remove('d-none');
        },50);
    }
}

const pinCode = (e) => {
  
    if(e.target.classList.value =='btn_1'){
      checkPin(1);
    } 
    if(e.target.classList.value == 'btn_2'){
        checkPin(2);
    }
    if(e.target.classList.value == 'btn_3'){
        checkPin(3);
    } if(e.target.classList.value == 'btn_4'){
        checkPin(4);
    }
     if(e.target.classList.value == 'btn_5'){
        checkPin(5);
    }
     if(e.target.classList.value == 'btn_6'){
        checkPin(6);
    }
     if(e.target.classList.value == 'btn_7'){
        checkPin(7);
    }
     if(e.target.classList.value == 'btn_8'){
        checkPin(8);
    }
     if(e.target.classList.value == 'btn_9'){
        checkPin(9);
    }
    if(e.target.classList.value == 'btn_0'){
        checkPin(0);
    }
}


const clicked = (event) => {  
    if(i < 4){
        password[i].classList.add('password_enter');
        pinCode(event);
        i++;
    }
   
}

cancel.addEventListener('click',function(){
    for(let i =0 ;i < 4;i++){
         password[i].classList.remove('password_enter');
    }
    i=0;
    code = 0;
});




    btn.forEach(function(singleClicked){
        singleClicked.addEventListener('click',clicked);
    });








