const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Commande ping!',
    
    run: (client, message, args) => {
        message.channel.send( { embeds: [
            new MessageEmbed()
                .setTitle('🏓 Pong!')
                .addField('Latence', `${client.ws.ping}ms`)
        ] } );
    },

    runSlash: (client, interaction) => {
        interaction.reply( { embeds: [
            new MessageEmbed()
                .setTitle('🏓 Pong!')
                .addField('Latence', `${client.ws.ping}ms`)
        ] } );
    },
};