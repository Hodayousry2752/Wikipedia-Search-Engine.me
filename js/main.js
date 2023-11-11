
let input=document.querySelector('#input');
let typeParg =document.querySelector('#type');
let list =document.querySelector('#list');

let finalRes;
const insure =()=>{
    if(input.value===''){
        typeParg.classList.replace('d-none','d-block');
        finalRes=[];
        resultsOfSearch(finalRes)
    
    }else{
        typeParg.classList.replace('d-block','d-none');
        getSearchResults(input.value)
    }
}

async function getSearchResults(sValue){
    
    let response = await fetch (`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${sValue}`);
    let result = await response.text();
    finalRes = JSON.parse(result).query.search;
    console.log(finalRes);
    resultsOfSearch(finalRes);
    
}

function resultsOfSearch(result){
    let htmlList='';
    for(let i=0;i<result.length;i++){
    htmlList+=`
            <div class="results p-2 ">
                <h3>${result[i].title}</h3>
                <p>${result[i].snippet}</p>
                <a class="btn" target='_blank' href="${`https://en.wikipedia.org/?curid=${result[i].pageid}`}">Read More</a>
            </div>`
}
    list.innerHTML=htmlList; 
}

input.addEventListener("keyup",insure );


    

   
    

    

