function createCalculator() {
    return {
        display: document.querySelector('.display'),
        
        start() {
            this.clickButtons();
            this.pressEnter();
        },
        buttonToDisplay(value) {
            this.display.value += value;
        },
        clearDisplay() {
            this.display.value = '';
        },
        delete() {
            this.display.value = this.display.value.slice(0, -1) //slice(indice de onde eu quero que comece a contar a string, quando o indice é negativo eu to escolhendo do indice da string da direita para esquerda)
        },
        calculate() {
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
        },
        clickButtons() {
            document.addEventListener('click', (e) => { // quando adicionar um document.addEventListener dentro de um objeto, usar sempre o arrow function
                const el = e.target;
                if (el.classList.contains('button-num')) {
                    this.buttonToDisplay(el.innerText);  
                }
                if (el.classList.contains('button-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('button-del')) {
                    this.delete();
                }
                if (el.classList.contains('button-equal')) {
                    this.calculate();
                }
            }) 
        },
        pressEnter() {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.calculate();
                }
            })
        }

    }
}

const calculator = createCalculator();
calculator.start();