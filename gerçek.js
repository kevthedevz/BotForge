const n = require("../../n.js")
module.exports = {
  name: "gerçek",
  aliases: ["gerçekler", "scroll", "truth"],
  type: "messageCreate",
  code: `
  $color[${n.rhex}]
  $author[$userdisplayname;$useravatar]

  $ifx[
    $if[$message[0]==;
      $description[${n.red} Lütfen bir metin girin.${n.n}${n.n}Kullanım:
\`$getservervar[önek]gerçek metin\`]]

    $elseif[$charcount[$message]>60;
      $description[${n.red} Lütfen 60 karakterden az bir metin girin.]]

    $elseif[$httprequest[https://api.alexflipnote.dev;get]!=200;
      $description[${n.red} Şu anda API yanıt vermiyor, eğer bu hatayı sürekli alıyorsan geliştiriciye bildir.]]

    $else[
    $color[${n.ana}]
    $image[https://api.alexflipnote.dev/scroll?text=$encodeuri[$message]]
    ]
  ]
  `
}