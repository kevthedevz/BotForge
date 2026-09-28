require('dotenv').config();
const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")

const db = new ForgeDB({
  events: ["connect"],
  type: "better-sqlite3",
})

const client = new ForgeClient({
  intents: ["GuildMessages", "Guilds", "MessageContent", "GuildMembers", "GuildPresences"],
  events: ["messageCreate", "clientReady", "interactionCreate"],
  extensions: [db],
  prefixes: ["!", "$getservervar[önek]"],
})

db.variables({
  önek: "!",
})

client.commands.load("./komutlar")
client.login(process.env.TOKEN)