document.getElementById('button').addEventListener('click',loadData);



function loadData(){
    //creating the new XMLHttpRequest
    const conn= new XMLHttpRequest();

    // opening the connection
    conn.open('GET','data.txt',true);

    // Execution of the AJAX call
    conn.onload=function(){
        // codes
        // 200: Correct
        // 403: Forbidden
        // 404: Not Found
        if(this.status===200){
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
        }
    }

    // other way to do the above task
    // conn.onreadystatechange = function(){
    //     console.log('Ready State',conn.readyState);
    //     // REady States
    //     // 0=Unsent
    //     // 1=opened
    //     // 2=Recieved
    //     // 3=loading
    //     // 4=done
    //     if(this.status===200 && this.readyState===4){
    //         document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;            
    //     }
        
    // }
    // Sending the AJAX request
    conn.send();
}