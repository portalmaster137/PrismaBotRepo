import { REST, Routes, SlashCommandBuilder } from "discord.js";
import LoggerHandler from "./LoggerHandler";

async function RegisterSlashCommands(
    commands: SlashCommandBuilder[],
    logger: LoggerHandler,
    botArgs: { token: string, prefix: string, verbose: boolean, clientID: string },
    guildId: string
    ) {
    //check if each command has a name and description
    //if not, throw an error
    commands.forEach(command => {
        if (!command.name || !command.description) {
            logger.log(2, "Slash command is missing a name or description");
        }
    });

    let map = commands.map(command => command.toJSON());

    logger.log(0, "Registering slash commands...");

    const rest = new REST({ version: "10" }).setToken(botArgs.token);

    await (async () => {
        try {
            logger.log(0, "Register Start.");
            const registeredCommands = await rest.put(
                Routes.applicationGuildCommands(botArgs.clientID, guildId),
                { body: map }
            );
            logger.log(0, "Registered commands: " + registeredCommands);
        } catch (error) {
            logger.log(2, "Error registering slash commands: " + error);
        }
    })();
    

}

export default RegisterSlashCommands;