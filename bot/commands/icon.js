const { ChatInputCommandInteraction, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
const client = require('../index')

module.exports = {
    name: 'icon',
    description: 'icon',
    options: [
        {
            name: 'user',
            description: 'Get a users profile avatar',
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: 'user',
                    description: 'Which user',
                    type: ApplicationCommandOptionType.User,
                    required: true
                }
            ]
        },
        {
            name: 'server',
            description: 'Get your server icon',
            type: ApplicationCommandOptionType.Subcommand,
        },
    ],
    /**
    * @param {ChatInputCommandInteraction} interaction
    * @param {client} client
    */
    async execute(interaction, client) {
        const { guild, options } = interaction

        switch (options.getSubcommand()) {
            case 'user': {
                const user = options.getUser('user')

                const embed = new EmbedBuilder()
                .setTitle(`${user.username}'s Avatar`)
                .setColor('#ff3f3f')
                .setImage(user.displayAvatarURL({ dynamic: true }))

                interaction.reply({ embeds: [embed] })
                return
            }
        
            case 'server': {
                const embed = new EmbedBuilder()
                .setTitle('Server Icon')
                .setColor('#ff3f3f')
                .setImage(guild.iconURL())

                interaction.reply({ embeds: [embed] })
                return
            }
        }

    }
}