module.exports = [{
name: "viewlockdown",
code: `

$forEachGuildChannel[5;{};viewlock;]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> **<:xelatongueout:952139608290914304> Locking all guild channels**]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage channels](https://top.gg/bot/$clientid) permission**}}]


$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage channels](https://top.gg/bot/$clientid) permission**}}]`
},{
type: "awaited",
name: "viewlock",
code: `
$modifyChannelPerms[$guildid;$channelid;-viewchannel]

`}]