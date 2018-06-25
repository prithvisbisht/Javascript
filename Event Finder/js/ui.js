class UI{
    constructor(){
        //app initialisation
        this.init();
    }
    init(){
        //to Display categories in Select
        this.printCategories();

        this.result=document.getElementById('result');
    }

    displayEvents(events){
        //Building template

        let html='';
        events.forEach(eventInfo => {
            html+=`
            <div class="col-md-4 mt-4">
                <div class="card">
                    <div class="card-body">
                        <img src="${eventInfo.logo !== null ? eventInfo.logo.url:"noimage.jpg"}" alt="" class="img-fluid mb-2">
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h4 class="text-center card-title">${eventInfo.name.text}</h4>
                            <p class="lead text-info">Event Information:</p>
                            <p>${eventInfo.description.text.substring(0,200)}...</p>
                            <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>&nbsp
                            <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span><hr>
                            <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block md-4">Get Tickets</a>
                        </div>
                    </div> 
                </div>
            </div>
            `;
        });

        this.result.innerHTML=html;
    }

    printCategories(){
        const categoryList= eventbrite.getCategoriesAPI()
        .then(categories=>{
            const categoriesList=categories.categories.categories;
            const categorySelect=document.querySelector('#category');
            categoriesList.forEach(category => {
                const option=document.createElement('option');
                option.value=category.id;
                option.appendChild(document.createTextNode(category.name));
                categorySelect.appendChild(option);
            }); 
        })
        .catch(error=>console.log(error));
    }

    printMessage(msg,className){
        const div=document.createElement('div');
        div.className=className;

        div.appendChild(document.createTextNode(msg));

        const searchDiv=document.querySelector('#search-events');
        searchDiv.appendChild(div);

        setTimeout(() => {
            this.removeMessage();
        }, 3000);
    }
    removeMessage(){
        const alert=document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}