const fs = require('fs');
var colors = require('colors');

/*Return Promise*/
const crearArchivoPromise = (base, cycle, list) => {

    return new Promise((resolve, reject) => {

        try{

            let output = '';

            output += '===============\n'.blue;
            output += `= Tabla del ${base} =\n`.blue;
            output += '===============\n'.blue;
                
            for (let i=1; i <= cycle; i++) {
                output += ` ${base} x ${i} = ${base*i} \n`;
            }
            
            if (list) {
                console.log(output);
            }
            /*
            fs.writeFile(`Tabla_${base}.txt`, output, (err) => {
                if(err) throw err;
                console.log('Completed');
            });
            */
        
            fs.writeFileSync(`./output/Tabla_${base}.txt`, output);

            resolve(`Tabla_${base}.txt`);
        }
        catch (err)
        {
            reject(err);
        }
    });


}

const crearArchivoAsync = async (base) => {

    try{

        let output = '';

        output += '===============';
        output += `= Tabla del ${base} =`;
        output += '===============';
            
        for (let i=1; i <= 10; i++) {
            output += ` ${base} x ${i} = ${base*i} \n`;
        }
        
        console.log(output);
        /*
        fs.writeFile(`Tabla_${base}.txt`, output, (err) => {
            if(err) throw err;
            console.log('Completed');
        });
        */
    
        fs.writeFileSync(`Tabla_${base}.txt`, output);

        return `Tabla_${base}.txt`;
    }
    catch (err)
    {
        throw (err);
    }

}

module.exports = {
    //crearArchivo: crearArchivoAsync
    crearArchivo: crearArchivoPromise
}


