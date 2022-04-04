module.exports = {
name: "setcountry",
$if: "v4",
code: `
<:noted:953980420519768105> **$username** Your country has been set to **$message**
$setGlobalUserVar[country;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [country]\`**}}]
$onlyIf[$tolowercase[$checkContains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;l;z;x;c;v;b;n;m]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You have specified an invalid country**}}]`}