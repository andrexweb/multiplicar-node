//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`\t tabla del ${ base }`.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        //const data = new Uint8Array(Buffer.from('Hola Mundo!!'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado !!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}