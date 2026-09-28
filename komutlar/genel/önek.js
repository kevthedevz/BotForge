const n = require("../../n.js")
module.exports = {
  name: "önek",
  aliases: ["prefix"],
  type: "messageCreate",
  code: `
  $color[${n.rhex}]
  $author[$userdisplayname;$useravatar]
  
  $ifx[
  $if[$hasperms[$guildid;$authorid;Administrator]!=true;
    $description[${n.red} Bu komutu kullanabilmen için \`Yönetici\` iznine sahip olmalısın.]]

  $elseif[$message[0]==;
    $description[${n.red} Lütfen bir önek girin.${n.n}${n.n}Kullanım:
\`$getservervar[önek]önek $\`]]

  $elseif[$charcount[$message[0]]>5;
    $description[${n.red} Lütfen 5 veya daha az karakter girin.]]

  $elseif[$getservervar[önek;$guildid]==$message[0];
    $description[${n.red} Şu anda zaten \`$message[0]\` önekini kullanıyorsunuz.]]

  $else[
  $setservervar[önek;$message[0];$guildid]
  $color[${n.ohex}]
  $description[${n.onay} **$guildname[$guildid]** sunucusu için önek \`$message[0]\` olarak ayarlandı.]]
  ]
  `
}
