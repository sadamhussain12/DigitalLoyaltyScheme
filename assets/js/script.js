// ============================
//    Auth JS Start
// =============================

document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const input = this.closest('.input-group').querySelector('.password-field');
        const icon = this.querySelector('i');

        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});

 document.querySelectorAll('.code-input').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
      if (input.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
  });

// ============================
//    Auth JS End
// =============================



// ============================
//    admin deshbord JS Start
// =============================


    document.addEventListener("DOMContentLoaded", function(event) {
   
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId),
bodypd = document.getElementById(bodyId),
headerpd = document.getElementById(headerId)

// Validate that all variables exist
if(toggle && nav && bodypd && headerpd){
toggle.addEventListener('click', ()=>{
// show navbar
nav.classList.toggle('show-side-bar')
// change icon
toggle.classList.toggle('bx-x')
// add padding to body
bodypd.classList.toggle('admin-body-pd')
// add padding to header
headerpd.classList.toggle('admin-body-pd')
})
}
}

showNavbar('header-toggle','nav-bar','admin-body-pd','header')

/*===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
if(linkColor){
linkColor.forEach(l=> l.classList.remove('active'))
this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

 // Your code to run since DOM is loaded and ready
});


// ============================
//    admin deshbord JS End
// =============================