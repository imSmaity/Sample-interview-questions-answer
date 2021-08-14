const readlineSync = require('readline-sync');

const news=readlineSync.question("Write news: ");
const newsSource=readlineSync.question("Enter this news source is Facebook, Whatsapp, or Telegram ...\n");

if(newsSource == "Facebook" || newsSource == "Whatsapp" || newsSource == "Telegram")
{
  console.log("News: "+news+"\n");
  console.log("Don't believe things on FB, Whatsapp and Talegram")
}