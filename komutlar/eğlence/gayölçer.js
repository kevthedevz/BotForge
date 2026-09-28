module.exports = {
  name: "gay",
  aliases: ["gölç", "gölçer", "gayölç", "gayölçer"],
  type: "messageCreate",
  code: `
  $color[Random]
  $thumbnail[https://api.some-random-api.com/canvas/$randomtext[overlay/gay;misc/lgbt]?avatar=$useravatar[$mentioned[0;true];512;png]]
  $title[**$userdisplayname[$mentioned[0;true]]**, sen **%$randomnumber[0;101]** gaysin.]
  $description[-# ⓘ Bu yalnızca bir eğlence komutudur.]
  $footer[$username çalıştırdı;$useravatar]
  `
}
