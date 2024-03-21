const inputBox = document.getElementById('inputBox'); 
const listContainer = document.getElementById('listContainer');

function addTask(){ 
    if(inputBox === ''){
        alert('Please enter a task');  
        
    } else { 
        let li = document.createElement('li');
        li.innerHTML = inputBox.value; 
        

    }
}