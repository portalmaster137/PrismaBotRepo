import fs from 'fs';

function CreateDotEnv() {
    let file = `
    TOKEN=
    PREFIX=
    VERBOSE=false
    DATABASE_URL="file:./dev.db"
    `;

    fs.writeFile('.env', file, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

CreateDotEnv();
