module.exports = {
    name: 'ready',
    once: true,
    
    async execute(client) {
        console.log('Je suis prêt !');

        const devGuild = await client.guilds.cache.get('816783555580788756');
        devGuild.commands.set(client.commands.map(command => command));
    },
};