let v1 = 10;
console.log(v1);

let v2 = 20;
console.log(v2);

const kim = {
    name: "김지인",
    age: 23,
    score :90
}

const yun = {
    name: "윤희성",
    age: 22 ,
    score: 89
}

const han = {
    name: "한동일",
    age: 24 ,
    score: 88
}

for(let field in han){
    console.log(field + "-" + han[field]);
}

console.log(kim.name);
console.log(kim["age"]); //[ "필드명" ]
let field = "score";
console.log(kim[field]); // kim["score"]

const persons = [kim, yun, han];
//for(let i=0; i < persons.length; i++){
for (let person of persons) {
    document.write("<ul>");
    for(let field in person){
        console.log(person[field]);
        document.write('<li class="' + field +'">'+person[field]+"</li>")
    }
    document.write("</ul>");
}