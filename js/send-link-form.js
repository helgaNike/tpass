import IMask from 'imask';

const sendLinkForm = document.querySelector('.get-app-form');
const phoneInput = sendLinkForm.querySelector('.get-app-form__input');
const submitBtn = sendLinkForm.querySelector('.get-app-form__btn');
const successMessage = document.querySelector('.get-app__success-msg');
const okBtn = successMessage.querySelector('.get-app__success-msg-btn');

const maskOptions = {
    mask: '+{1}(000)000-0000',
  };

const mask = IMask(phoneInput, maskOptions);

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(!phoneInput.value) {
        phoneInput.classList.add('error');
    }
    else {
        phoneInput.classList.remove('error');
        this.disabled = true;
        const submit = new Promise(function(resolve, reject){
            setTimeout(()=>resolve("done"), 1000);
        });
        submit.then(result => {
            this.disabled = false;
            sendLinkForm.classList.add('hidden');
            successMessage.classList.remove('hidden');    
        });
    }
}); 

okBtn.addEventListener( 'click', function(){
    sendLinkForm.classList.remove('hidden');
    successMessage.classList.add('hidden');
    mask.value = '';
});