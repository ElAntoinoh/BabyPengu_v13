module.exports = {
    name: 'interactionCreate',
    once: false,
    
    async execute(client, interaction) {
        if( interaction.isCommand() ) {
            const command = client.commands.get(interaction.commandName);

            if( !command ) return interaction.reply('Cette commande n\'existe pas!');

            command.runSlash(client, interaction);
        }
    },
};