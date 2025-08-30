function Calculator() {
    this.display = document.querySelector('.display')

    this.start = () => {
        this.clickButtons();
        this.pressEnter();
    }

    this.buttonToDisplay = (value) => {
        this.display.value += value;
        this.display.focus(); //volta o foco para o display
    }
    
    this.clearDisplay = () => this.display.value = '';

    this.delete = () => this.display.value = this.display.value.slice(0, -1)
    
    this.calculate = () => {
        try {
            let conta = eval(this.display.value);
            if (isNaN(conta) || !isFinite(conta)) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch (error) {
            alert('Conta inválida');
            return;
        }
    }
    
    this.clickButtons = () => {
        document.addEventListener('click', (e) => { 
            const el = e.target;
            if (el.classList.contains('button-num')) this.buttonToDisplay(el.innerText);  
            if (el.classList.contains('button-clear')) this.clearDisplay();
            if (el.classList.contains('button-del')) this.delete();
            if (el.classList.contains('button-equal')) this.calculate();
        }) 
    }
    
    this.pressEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.calculate();            
        })
    }
}

const calculator = new Calculator();
calculator.start();