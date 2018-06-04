class EventBrite{
    
    constructor(){
        this.auth_token='WECE22QXMRQZXDTBC774';
        this.orderby='date';
    }

    async getCategoriesAPI(){
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        const categories=await categoriesResponse.json();

        return {
            categories
        }
    }

    async queryAPI(name,category){
        const eventResponse= await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${name}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);

        const events = await eventResponse.json();

        return{
            events
        }
    }
}