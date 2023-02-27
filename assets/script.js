var  topics = ['HTML','CSS','Git','JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listtopics(){
    for(var x =0; x <  topics.length; x++) {
        console.log( topics[x]);
        }
}
function selecttopics(){
    if ( randomTopic === 'HTML'){
        console.log("Let's study HTML");
    }
    else if ( randomTopic === 'CSS'){
        console.log("Let's study CSS");
    }
    else if ( randomTopic === 'Git'){
        console.log("Let's study Git");
    }
    else if ( randomTopic === 'JavaScript'){
        console.log("Let's study JavaScript");
   
    }
    else {
        console.log("please try again");  
}
}
console.log('here are the topics we learned');
listtopics();
console.log('Which should we study first?');
selecttopics();


//adding the function


 /* if ( topics === 'HTML'){
     console.log("Let's study HTML");
 }
 else if ( topics === 'CSS'){
     console.log("Let's study CSS");
 }
 else if ( topics === 'Git'){
     console.log("Let's study Git");
 }
 else if ( topics === 'JavaScript'){
     console.log("Let's study JavaScript");

 }
 else {
     console.log("please try again");
} */