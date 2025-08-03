const form=document.getElementById('form');
const email=document.getElementById('email');
const errorMessage=document.querySelector('.error-message')
const button=document.querySelector('.btn')

let isvalid=false
function submit(){
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
  })
  const isValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if(!isValid.test(email.value)){
    email.classList.add('border-Red');
    errorMessage.classList.remove('hidden');
    isvalid=false
  }else{
    email.classList.remove('border-Red');
    errorMessage.classList.add('hidden');
    isvalid=true
  }
}
button.addEventListener('click',()=>{
  submit()
  if(isvalid){
    document.querySelector('.success').classList.remove('hidden');
    email.value=''
  }
})
email.addEventListener('keyup',(e)=>{
  submit()
})
document.querySelector('.cancel').addEventListener('click',(e)=>{
    document.querySelector('.success').classList.add('hidden');
})
