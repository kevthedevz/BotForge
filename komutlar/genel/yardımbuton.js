const n = require("../../n.js")
module.exports = {
  type: "interactionCreate",
  code: `
  $onlyif[$checkcontains[$customid;y-]==true;]

  $color[${n.ana}]
  $author[$userdisplayname;$useravatar]

  $ifx[
$c[// ANA MENÜ]
  $if[$customid==y-ana-$authorid;
  $interactionupdate[
$title[${n.asyf} Ana Sayfa]
$description[
Yardım menüsüne hoş geldin!

Aşağıdaki butonları kullanarak kategoriler arasında gezinebilirsin.

${n.asyf} **Ana Sayfa**${n.n}${n.gnl} **Genel**${n.n}${n.eğl} **Eğlence**
]
$footer[Mevcut önek: $getservervar[önek] ・ Sayfa 1/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;1;${n.asyf};true]
  $addbutton[y-genel-$authorid;;2;${n.gnl}]
  $addbutton[y-eğlence-$authorid;;2;${n.eğl}]]]

$c[// GENEL]
  $elseif[$customid==y-genel-$authorid;
  $interactionupdate[
$title[${n.gnl} Genel Komutlar]
$description[
Komutlarda belirtilen\\\;
() işareti opsiyonel, [\\] ise zorunlu olduğu anlamına gelir.

\`ping\`
Botun gecikme süresini gösterir

\`bilgi\`
Botun istatistiklerini listeler

\`önek [metin\\]\`
Sunucuya özel prefix(önek)'i değiştirir
]
$footer[Mevcut önek: $getservervar[önek] ・ Sayfa 2/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;2;${n.asyf}]
  $addbutton[y-genel-$authorid;;1;${n.gnl};true]
  $addbutton[y-eğlence-$authorid;;2;${n.eğl}]]]

$c[// EĞLENCE]
  $elseif[$customid==y-eğlence-$authorid;
  $interactionupdate[
$title[${n.eğl} Eğlence Komutları]
$description[
Komutlarda belirtilen\\\;
() işareti opsiyonel, [\\] ise zorunlu olduğu anlamına gelir.

\`gay (@kişi)\`
Eşcinsellik ölçümü yapar

\`google [metin1\\] [metin2\\]\`
"Bunu mu demek istediniz" meme'ini oluşturur

\`gerçek [metin\\]\`
Gerçeğin parşömeni meme'ini oluşturur
]
$footer[Mevcut önek: $getservervar[önek] ・ Sayfa 3/3]
  $addactionrow
  $addbutton[y-ana-$authorid;;2;${n.asyf}]
  $addbutton[y-genel-$authorid;;2;${n.gnl}]
  $addbutton[y-eğlence-$authorid;;1;${n.eğl};true]]]

$c[// YANLIŞ BUTON]
  $else[
  $ephemeral
  $color[${n.rhex}]
  $description[${n.red} Bu mesaj size ait değil. Lütfen \`$getservervar[önek]yardım\` komutunu çalıştırın.]
    ]
  ]
  `
}
