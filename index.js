/*
Crie um crawler (aplicação de busca de informação na web) que leia as 3 primeiras notícias do site g1.globo.com
 e organize em um JSON contendo o título, subtitulo (se tiver) e url da imagem de destaque (se tiver). 
 Não utilize bibliotecas automáticas (scrappy ou similares)
*/

const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: 'https://g1.globo.com/',
  transform: function (body) {
    return cheerio.load(body)
  }
};

rp(options)
.then(($) => {
  $('.feed-post-body').each((i, item) => {
    console.log($(item).find('.feed-post-body-title').text())
  })
})
.catch((err) => {
  console.log(err);
})
