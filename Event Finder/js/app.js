const eventbrite = new EventBrite();
const ui = new UI();

//Creating a Listener
document.getElementById('submitBtn').addEventListener('click',(event)=>{
    event.preventDefault();

    const eventName=document.getElementById('event-name').value;
    const category=document.getElementById('category').value;
    
    if(eventName!==''){
        eventbrite.queryAPI(eventName,category);
    }
    else{
        ui.printMessage("Add an Event Or City","alert alert-danger mt-4")
    }
    
})
