//DOM(Document Object Model) :-helps to link HTM to JS in the form of objects and methods.\

console.dir(document); 
// document tells every about the html (when,where, who,etc).
//dom stores object version of html.


console.log(document.all); //all is not used anymore.

console.log(document.all[10]); //gives the 10th element of the html.


//ACCWSS FUNCTIONS.

//1. getElementById() :- it is used to access the element by its id.
const myh1 = document.getElementById('header-title'); //gets the element with id myh1.
console.log(myh1);

//2. getElementsByClassName() :- it is used to access the element by its class name.
const myList = document.getElementsByClassName('list-group-item');
console.log(myList)

for(let i= 0; i<myList.length; i++){
    if(i%2==0){
        //even indexed
        //element.style.cssProperty = value;
        myList[i].style.backgroundColor = 'gray';
        myList[i].style.color = 'white';
        
    }else{
        //odd indexed
    }
}




