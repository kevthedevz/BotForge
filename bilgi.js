const n = require("../../n.js")
module.exports = {
  name: "bilgi",
  aliases: ["bbilgi", "botbilgi", "istatistik", "istatistikler"],
  type: "messageCreate",
  code: `
  $let[takviye;$djseval[ctx.client.guilds.cache.reduce((toplam, guild) => toplam + (guild.premiumSubscriptionCount || 0), 0)]]
  $let[durumlar;$djseval[((m) => Array({e:'${n.çevrimiçi}', c: m.filter(x => x.presence?.status === 'online').size}, {e:'${n.boşta}', c: m.filter(x => x.presence?.status === 'idle').size}, {e:'${n.rahatsız}', c: m.filter(x => x.presence?.status === 'dnd').size}, {e:'${n.yayında}', c: m.filter(x => x.presence?.activities?.some(a => a.type === 1)).size}, {e:'${n.çevrimdışı}', c: m.filter(x => !x.presence || x.presence.status === 'offline').size}).filter(x => x.c > 0).map(x => x.e + ' ' + x.c.toLocaleString('tr-TR')).join(' '))(ctx.client.guilds.cache.flatMap(g => g.members.cache))]]

  $color[${n.ana}]
  $thumbnail[$useravatar[$clientid]]
  $title[🤖 Bot İstatistikleri]
  $description[> Botun teknik verileri ve çalışma bilgileri aşağıda yer almaktadır.]

  $addfield[${n.paket} Paket Bilgileri;
> **Node.js:** \`$nodeversion\`
> **Discord.js:** \`v$djsversion\`
> **ForgeScript:** \`v$version\`
> **Forge.DB:** \`v$extensionversion[forge.db]\`]

  $addfield[${n.süre} Gecikme ve Çalışma Süresi;
> **Ping:** \`$divide[$trunc[$divide[$ping;10]];100]s\`
> **DB Ping:** \`$dbpingms\`
> **Uptime:** \`$parsedigital[$uptime]\`]

  $addfield[${n.sistem} Sistem Bilgileri;
> **RAM Kullanımı:** \`$divide[$trunc[$divide[$ram;10.24]];100] GB / $divide[$trunc[$multi[$maxram;100]];100] GB\`
> **Geliştirici:** <@$clientownerid>
> **Oluşturulma:** <t:$trunc[$divide[$usercreatedat[$clientid];1000]]:R>]

  $addfield[${n.sunucu} Sunucu Bilgileri;
> **Sunucu Sayısı:** \`$servercount\`
> **Kullanıcı Sayısı:** \`$separatenumber[$usercount;.]\` ($get[durumlar])
> **Takviye Sayısı:** \`$get[takviye]\`
> **Kanal / Rol:** \`$channelcount\` kanal / \`$rolecount\` rol
> **Emoji Sayısı:** \`$sum[$emojicount[normal];$emojicount[animated]]\`]

  $footer[$username çalıştırdı | $divide[$trunc[$divide[$executiontime;10]];100]s içinde;$useravatar]
  `
}