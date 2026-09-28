module.exports = {
  type: "clientReady",
  code: `
  $let[durum;Bu ekonomide Nesix mi?]
  $setstatus[online;Custom;$get[durum]]
  $setinterval[$setstatus[online;Custom;$get[durum]];10m]
`
}
