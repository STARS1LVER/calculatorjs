        // Obtén referencias a los elementos del DOM
        const numero1Input = document.getElementById('numero1');
        const numero2Input = document.getElementById('numero2');
        const resultadoLabel = document.getElementById('resultado');
        const sumarButton = document.getElementById('sumar');
        const restarButton = document.getElementById('restar');
        const multiplicarButton = document.getElementById('multiplicar');
        const dividirButton = document.getElementById('dividir');

        // Agrega manejadores de eventos a los botones
        sumarButton.addEventListener('click', () => {
            const numero1 = parseFloat(numero1Input.value);
            const numero2 = parseFloat(numero2Input.value);
            let resultado = numero1 + numero2;
            resultadoLabel.textContent = resultado;
        });

        restarButton.addEventListener('click', () => {
            const numero1 = parseFloat(numero1Input.value);
            const numero2 = parseFloat(numero2Input.value);
            let resultado = numero1 - numero2;
            resultadoLabel.textContent = resultado;
        });

        multiplicarButton.addEventListener('click', () => {
            const numero1 = parseFloat(numero1Input.value);
            const numero2 = parseFloat(numero2Input.value);
            let resultado = numero1 * numero2;
            resultadoLabel.textContent = resultado;
        });

        dividirButton.addEventListener('click', () => {
            const numero1 = parseFloat(numero1Input.value);
            const numero2 = parseFloat(numero2Input.value);
            if (numero2 === 0) {
                resultadoLabel.textContent = 'Error: división por cero';
            } else {
                let resultado = numero1 / numero2;
                resultadoLabel.textContent = resultado;
            }
        });