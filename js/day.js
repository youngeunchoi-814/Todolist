const schdule = document.querySelector("h2#date");

function getday(){
    const date= new Date();
    const year = date.getFullYear();
    const month =String(date.getMonth()+1).padStart(2,"0");
    const day =String(date.getDate()).padStart(2,"0");
    schdule.innerText =`${year}-${month}-${day}`;
}
getday();
