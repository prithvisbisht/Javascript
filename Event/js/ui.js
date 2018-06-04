class UI{
    constructor(){
        //app initialisation
        this.init();
    }
    init(){
        //to Display categories in Select
        this.printCategories();
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
}