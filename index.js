
const inputelement=document.getElementById('inputelement');
const buttons=document.getElementById('buttons');
const todolist=document.getElementById('todolist');
const shownotification=document.getElementById('shownotification');
const countingTasks=document.getElementById('countingTasks');

let addedCount=0;

// main function 
function addTask(){
    if(inputelement.value==""){
        showNotification('Item not be empty!');
    }
    else{  
    const newitem=document.createElement('li');
    newitem.innerText=inputelement.value;
     
    showNotification('One Task Is Added Successfully!');
   
//check box function
const addcheckbox=document.createElement('input');
    addcheckbox.type='checkbox';
    addcheckbox.addEventListener('click',function(){
         
        if(addcheckbox.checked){
            newitem.style.color="green";
            showNotification('Your Task is Completed!');
            addedCount++;
            counted('Total Tasks Completed');
             
        }
        else{
            newitem.style.color='white';
            --addedCount;
            counted('Total Tasks Completed');
            
             
        }
    });
    
//  delete function 

    const deleteItem=document.createElement('button');
    deleteItem.innerText='Delete';
    deleteItem.addEventListener('click',function(){
        newitem.remove();
        showNotification('Item Deleted Successfully!');   
    })
     
    newitem.appendChild(deleteItem);
    newitem.appendChild(addcheckbox);
    todolist.appendChild(newitem);
}    
}
// main function is ended
//---------------------------------

//show notification function
function showNotification(text){
    shownotification.innerText=text;
    shownotification.style.boxShadow="2px 2px 8px green";
    shownotification.style.border="green";
    setTimeout(function() {
        shownotification.remove();
      },2000);
      document.body.appendChild(shownotification);    
}
//count the completed tasks function
function counted(text){
    countingTasks.innerText=text+" "+addedCount;
    setTimeout(function() {
         countingTasks.remove();
      },2000);
      document.body.appendChild(countingTasks);
}
//eventlistener
buttons.addEventListener('click',addTask);