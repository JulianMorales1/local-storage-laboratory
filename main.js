let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#savedString");

let savedStringValue = localStorage.getItem('savedStringValue');

if (savedStringValue === null) {
    savedString.innerText = 'Nothing Saved - Please submit an item into the form';
} else {
    savedString.innerText = savedStringValue;
}

stringSaveForm.addEventListener('submit', function(event){
    event.preventDefault();

    
    localStorage.setItem('savedStringValue', stringInput.value);

    console.log(localStorage.getItem('savedStringValue'));
    
    savedStringValue = localStorage.getItem('savedStringValue');
    savedString.innerText = savedStringValue;
})


///////////////////////////////////////////////////////////////////////////////////////////


let reloadForm = document.querySelector('#reloadPage');
let reloadCount = document.querySelector('#reloadNumber');

let reloadStorage = Number(localStorage.getItem('reloadStorage'));

if(reloadStorage === 0){
    localStorage.setItem('reloadStorage', 1)
} else {
    localStorage.setItem('reloadStorage', reloadStorage + 1)
    reloadCount.innerText = reloadStorage
}


//////////////////////////////////////////////////////////////////////////////////////////

let listInput = document.querySelector('#list-Input');
let listForm = document.querySelector('#list-save-form');
let listDisplay = document.querySelector('#listDisplay');

let array = ['item1', 'item2']
localStorage.setItem('list', JSON.stringify(array))
let list = localStorage.getItem('list');
console.log(list);

function setupList(){
    
    if (list === null) {
        
        list = [];
    } else {
    
        list = JSON.parse(list);
    }
}
setupList();
listForm.addEventListener('submit', function(event){

    event.preventDefault();
    

let newListItem = 
    listInput.value;


list.push(newListItem);

console.log(newListItem);

localStorage.setItem('list', JSON.stringify(list));

listDisplay.innerText = list
});
