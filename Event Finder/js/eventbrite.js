class EventBrite{
    
    constructor(){
        this.auth_token='WECE22QXMRQZXDTBC774';
    }

    async getCategoriesAPI(){
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        const categories=await categoriesResponse.json();

        return {
            categories
        }
    }

    async queryAPI(name,category){
        url=`https://www.eventbriteapi.com/v3/events/search/?q=${}&categories=${}&token=WECE22QXMRQZXDTBC774`
    }
}