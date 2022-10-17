console.log(
    "test"
)

let btn_1=document.querySelector('.btn')
let btn_2=document.querySelector('.btn2')
let form_box=document.querySelector('.box_1')
let reg_box_2=document.querySelector('.reg_box_2')
console.log(reg_box_2);

let btn_3=document.querySelector('.btn3')


//active



Swal.fire("Done")





function show_reg(){
form_box.classList.add('show');
}
function show_reg_2(){
    reg_box_2.classList.add('show');
}


function close_form(){
    form_box.classList.remove('show');
}


function close_form_2(){
    reg_box_2.classList.remove('show');
}