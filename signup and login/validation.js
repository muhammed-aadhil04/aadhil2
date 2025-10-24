const form=document.getElementById('form')
const firstname_input=document.getElementById('firstname-input')
const email_input=document.getElementById('email-input')
const password_input=document.getElementById('password-input')
const repeat_password_input=document.getElementById('repeat-password-input')
const error_message=document.getElementById('error-message')
form.addEventListener('submit',(e)=>{
    let errors=[]
    if(firstname_input){
        errors=getSignupFormErrors(firstname_input.Value,email_input.Value,password_input.Value,repeat_password_input.value)
    }
    else{
        errors=getLoginFormErrors(email_input.value,password_input.value)
    }
    if(errors.length>0){
        e.preventDefault()
        error_message.innerText=errors.join(".")
    }
})

function getSignupFormErrors(firstname,email,password,repeatpassword){
    let errors=[]
    if(firstname===''|| firstname==null){
        errors.push('firstname is required')
        firstname_input.parentElement.classList.add('Incorrect')
    }
       if(email===''|| email==null){
        errors.push('email is required')
        email_input.parentElement.classList.add('Incorrect')
    }
       if(password===''|| password==null){
        errors.push('password is required')
        password_input.parentElement.classList.add('Incorrect')
    }
    if(password.length<8){
        errors.push('password must have at least 8 characters')
        password_input.parentElement.classList.add('Incorrect')
    }
    if(password!==repeatpassword){
        errors.push('password does not match repeated password')
        password_input.parentElement.classList.add('Incorrect')
        repeat_password_input.parentElement.classList.add('Incorrect')
    }

    return errors;
}
function getLoginFormErrors(email,password){
    let errors=[]
    if(email===''|| email==null){
        errors.push('email is required')
        email_input.parentElement.classList.add('Incorrect')
    }
       if(password===''|| password==null){
        errors.push('password is required')
        password_input.parentElement.classList.add('Incorrect')
    }
    return errors;
}
const allInputs=[firstname_input,email_input,password_input,repeat_password_input].filter(input=>input!=null)
allInputs.forEach(input=>{
    input.addEventListener('input',()=>{
        if(input.parentElement.classList.contains('Incorrect')){
            input.parentElement.classList.remove('Incorrect')
            error_message.innerText=''
        }
    })
})