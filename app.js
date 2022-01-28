function app(){
    let n = 0;
    const numero = document.getElementById('num');
    const agregar = document.getElementById('increase');
    agregar.addEventListener('click', (e) => {
        n = n+1
        numero.innerHTML = n;
    });

    const decrease = document.getElementById('decrease');
    decrease.addEventListener('click', () => {
        n = n-1
        numero.innerHTML = n;
    })
}

app()