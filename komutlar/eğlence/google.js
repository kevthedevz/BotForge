const n = require("../../n.js")
module.exports = {
  name: "google",
  type: "messageCreate",
  code: `
  $color[${n.rhex}]
  $author[$userdisplayname;$useravatar]

  $ifx[
    $if[$message[0]==;
      $description[${n.red} Lütfen birinci metni girin.${n.n}${n.n}Kullanım:
\`$getservervar[önek]google metin1 metin2\`]]

    $elseif[$and[$charcount[$message[0]]>40;$message[1]==];
      $description[${n.red} Lütfen birinci metni 40 karakterden az girin.]]

    $elseif[$message[1]==;
      $description[${n.red} Lütfen ikinci metni girin.${n.n}${n.n}Kullanım:
\`$getservervar[önek]google $message[0] metin2\`]]

    $elseif[$and[$charcount[$message[0]]>40;$charcount[$message[1]]>40];
      $description[${n.red} Lütfen her iki metni de 40 karakterden az girin.]]

    $elseif[$charcount[$message[0]]>40;
      $description[${n.red} Lütfen birinci metni 40 karakterden az girin.]]

    $elseif[$charcount[$message[1]]>40;
      $description[${n.red} Lütfen ikinci metni 40 karakterden az girin.]]

    $elseif[$httprequest[https://api.alexflipnote.dev;get]!=200;
      $description[${n.red} Şu anda API yanıt vermiyor, eğer bu hatayı sürekli alıyorsan geliştiriciye bildir.]]
    
    $else[
      $color[${n.ana}]
      $image[https://api.alexflipnote.dev/didyoumean?top=$encodeuri[$message[0]]&bottom=$encodeuri[$message[1]]]
    ]
  ]
  `
}
