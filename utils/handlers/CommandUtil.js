const { promisify } = require('util');
const { glob      } = require('glob');

const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async commandFile => {
        const command = require(commandFile);

        if( !command.name || !command.description )
            return console.log(`-----\nCommande non chargée: pas de nom et/ou de description\nFichier -> ${commandFile}\n-----`);

        client.commands.set(command.name, command);

        console.log(`Commande chargée: ${command.name}`);
    });
};