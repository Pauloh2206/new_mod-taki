// Menus - PT
// By: Hiudy
// menumemb.js
// Olha, deu muito trabalho criar esse sistema de tradução.
// E mais trabalho ainda para traduzir tudo.
// Caso for usar a bot de base pelo menos de os creditos.
// Caso não for te atrapalhar, considere fazer uma doação.
// Link: https://cognima.com.br/donate.
// Aceitamos todo tipo de doação, pix, paypal, stripe,
// Cartões de credito e debito, crypto entre varios outros.
// Qualquer valor ja nos ajuda muito.

async function menuMembros(prefix, botName = "MeuBot", userName = "Usuário") {
  return `
╭┈⊰ 🌸 『 *${botName}* 』
┊Olá, *${userName}*!
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *GANHAR DINHEIRO*
┊
┊•.̇𖥨֗🍥⭟${prefix}indicacao
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *INFORMAÇÕES*
┊
┊•.̇𖥨֗🍥⭟${prefix}perfil
┊•.̇𖥨֗🍥⭟${prefix}dono
┊•.̇𖥨֗🍥⭟${prefix}ping
┊•.̇𖥨֗🍥⭟${prefix}rvisu
┊•.̇𖥨֗🍥⭟${prefix}totalcmd
┊•.̇𖥨֗🍥⭟${prefix}topcmd
┊•.̇𖥨֗🍥⭟${prefix}cmdinfo
┊•.̇𖥨֗🍥⭟${prefix}statusgp
┊•.̇𖥨֗🍥⭟${prefix}statusbot
┊•.̇𖥨֗🍥⭟${prefix}meustatus
┊•.̇𖥨֗🍥⭟${prefix}regras
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *CONFIGURAÇÕES*
┊
┊•.̇𖥨֗🍥⭟${prefix}mention
┊•.̇𖥨֗🍥⭟${prefix}afk
┊•.̇𖥨֗🍥⭟${prefix}voltei
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯

╭┈❪🍧ฺꕸ▸ *RANKS*
┊
┊•.̇𖥨֗🍥⭟${prefix}rankativo
┊•.̇𖥨֗🍥⭟${prefix}rankinativo
┊•.̇𖥨֗🍥⭟${prefix}rankativog
╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯`;
}

module.exports = menuMembros;