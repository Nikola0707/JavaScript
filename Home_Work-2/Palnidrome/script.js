// Напишете фунција која ќе треба да одреди колку зборови од низа на зборови
// се пaлиндром и истите да се додадат во нова низа која ќе ги содржи само
// пaлиндром зборовите. На пример: низа од зборови и реченици:
// 'македонија', 'дај ми една чаша полна со вино',
// ' 'анаволимилована', 'радар', ‘кајак‘, ‘калабалак‘,
// 'нели не си ти сенилен', 'јадење и пиење дај', 'слушател', 
// 'фудбал', 'музика' ...... палиндром зборови и реченици се 
// ['анаволимилована', 'радар', ‘кајак‘, ‘калабалак‘, 'нели не си ти сенилен', 'јадење и пиење дај']

const allWords = ['македонија', 'дај ми една чаша полна со вино','анаволимилована', 'радар', 'кајак', 'калабалак', 'нели не си ти сенилен', 'јадење и пиење дај', 'слушател','фудбал', 'музика'];
const palindromWords = [];

function checkPalindromWords(words){
        
    for(let i = 0; i < words.length; i++){
        let wordString = words[i];
        let splitWord = words[i].split('').reverse().join('');
        if(wordString === splitWord){
            palindromWords.push(splitWord);
        }
        
    }
     return `In this sentence have ${palindromWords.length} palindrome words. Here is a list of them: [${palindromWords}]`;
}
console.log(checkPalindromWords(allWords));