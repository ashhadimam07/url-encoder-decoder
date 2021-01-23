const chalk = require('chalk');
const readLineSync= require('readline-sync');

function urlEncode(url)
{
  const encode= encodeURIComponent(url).replace('.','$');
  return encode;
}

function urlDecode(encoded_url)
{
  const decode= decodeURIComponent(encoded_url).replace('$','.');
  return decode;
}


function urlEncodeDecode()
{
  console.log(chalk.yellowBright.bold("------URL ENCODER DECODER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] URL Encoder \n\n[2] URL Decoder\n\n\[3] Exit\n\n\n"));
  
  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
  while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----URL ENCODER----\n\n"));
        const url = readLineSync.question(chalk.yellowBright.bold("Enter the URL to encode?\n"));
        const encode = urlEncode(url);
        console.log(chalk.red("The encoded URL is: ",encode +'\n\n'));
        break;
      case 2:
        console.log(chalk.redBright("\n----URL DECODER----\n\n"));
        const encoded_url = readLineSync.question(chalk.yellowBright.bold("Enter the encoded URL to decode ?\n"));
        const decode = urlDecode(encoded_url);
        console.log(chalk.red("The decoded URL is: ",decode+'\n\n'));
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=3)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
  
}



urlEncodeDecode();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));