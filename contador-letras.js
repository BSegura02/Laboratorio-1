let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

function countLetters(texto) {
    let contadorLetras = {};

    
    texto = texto.replace(/\s/g, '').toLowerCase();

    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        
        if (contadorLetras[letra]) {
            contadorLetras[letra]++;
        } else {
            contadorLetras[letra] = 1;
        }
    }

    return contadorLetras;
}

console.log(countLetters(par));
