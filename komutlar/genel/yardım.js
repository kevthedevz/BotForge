const n = require("../../n.js")
module.exports = {
  name: "yardım",
  aliases: ["help"],
  type: "messageCreate",
  code: `
  $color[${n.ana}]
  $author[$userdisplayname;$useravatar]
  $title[Ana Sayfa]
$description[
Yardım menüsüne hoş geldin!

Aşağıdaki butonları kullanarak kategoriler arasında gezinebilirsin.

${n.asyf} **Ana Sayfa**${n.n}${n.gnl} **Genel**${n.n}${n.eğl} **Eğlence**
]
$footer[Mevcut önek: $getservervar[önek] ・ Sayfa 1/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;1;${n.asyf};true]
  $addbutton[y-genel-$authorid;;2;${n.gnl}]
  $addbutton[y-eğlence-$authorid;;2;${n.eğl}]
  `
}
