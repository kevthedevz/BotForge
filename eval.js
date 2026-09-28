module.exports = {
  name: "eval",
  aliases: ["ev"],
  type: "messageCreate",
  code: `$onlyForUsers[;$botOwnerID]
         $eval[$message]`
}