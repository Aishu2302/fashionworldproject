// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);
// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');

    /*
        Validation code here
    */
       // Get the values of the inputs
       const name = newItemNameInput.value;
       const description = newItemDescription.value;
       const createdAt = new Date();
   
       // Add the task to the task manager
       itemsController.addItem(name, description, createdAt);
   
       // Clear the form
       newItemNameInput.value = '';
       newItemDescription.value = '';
   });
function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
addItemCard({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItemCard({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})
function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'T-Shirt',
        'img':'D:\Fashion World\resources\images\f28.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Shirt',
        'img':'',
        'description':''}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}
loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();