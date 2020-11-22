// Напишете фунција која ќе треба сите зборови кои имаат парен 
// број на карактери во една реченица да ги испечати и колку пати се 
// повторуваат во текстот. Пример: “I am a student in Computer Science
//  and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. 
//  My goals are to become a Software Developer after that, so I am working toward it right now.
//  "Парен број се зборовите: am, in, Computer, JavaScript, 
//  at, taking, course, My, to, become, Software, that, so, toward, it.

function evenStrings(string){
    let stringSplit = string.split(' ');     
    for(let i = 0; i < stringSplit.length; i++){
        if(stringSplit[i].length % 2 == 0){
            let count = string.split(stringSplit[i]).length - 1;
            console.log(`${stringSplit[i]} and its ${count} times in the sequence!`);
        }
    }
}

let runFunction = evenStrings("I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently.My goals are to become a Software Developer after that, so I am working toward it right now.");
console.log(runFunction);
     