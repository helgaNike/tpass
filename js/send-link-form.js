import IMask from 'imask';

class GetAppBlock {
    constructor(appBlock) {
        this.appBlock = appBlock;
        this.sendLinkForm = this.appBlock.querySelector('.get-app-form');
        this.phoneInput = this.sendLinkForm.querySelector('.get-app-form__input');
        this.submitBtn = this.sendLinkForm.querySelector('.get-app-form__btn');
        this.successMessage = this.appBlock.querySelector('.get-app__success-msg');
        this.okBtn = this.successMessage.querySelector('.get-app__success-msg-btn');

        this.maskOptions = {
            mask: '+{1}(000)000-0000',
        };
        this.mask = IMask(this.phoneInput, this.maskOptions);

        this.addEvents();
    }
    isFormValidate() {
        if (!this.phoneInput.value) {
            this.phoneInput.classList.add('error');
            return false;
        }
        this.phoneInput.classList.remove('error'); 
        return true;
    }
    submitForm(e) {
        e.preventDefault();
        if(this.isFormValidate()) {
            this.submitBtn.disabled = true;
            const submit = new Promise(function (resolve, reject) {
                setTimeout(() => resolve("done"), 1000);
            });
            submit.then(result => {
                this.submitBtn.disabled = false;
                this.sendLinkForm.classList.add('hidden');
                this.successMessage.classList.remove('hidden');
            });
        }
    }
    addEvents() {
        this.submitBtn.addEventListener('click', this.submitForm.bind(this));
        this.okBtn.addEventListener('click', () => {
            this.sendLinkForm.classList.remove('hidden');
            this.successMessage.classList.add('hidden');
            this.mask.value = '';
        });
    }

}

const getAppBlock = document.querySelector('.get-app');

if (getAppBlock) {
    new GetAppBlock(getAppBlock);
}