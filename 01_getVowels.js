

const string = "Привет! Как дела?";
let vowelsRu = [];
vowelsRu = 'оаеэуию'.split('');



let getVowels = msg => {
  ` R `
  let msgArr = msg.split('');
  let vowelsArr = msgArr.filter(el => {
    return vowelsRu.indexOf(el) >= 0
   });
   return vowelsArr.join('')
}


console.log(getVowels(string));