let buttons = document.querySelectorAll('.button');
for(let i = 0; i<buttons.length ;i++){
    let button = buttons[i]; 
    button.addEventListener('click',function(e){    
        updateTotalCount(e.target)
        updateTaskCount(e.target)
        e.target.setAttribute('disabled','true')
        e.target.classList.add('bg-gray-400')
        let time = new Date().toLocaleTimeString();
        
        let container = document.getElementById('container');
        let newList = document.createElement('div');
        newList.innerHTML = 
        `
       <h1 class="poppins font-normal text-[24px] bg-[rgb(244,247,255)] rounded-md p-4  opacity-[0.7]">You have Complete The Task ${title} at ${time}</h1>
        `
        container.appendChild(newList);
        
    })

   
}


// document.getElementById("demo").innerHTML = d;
const d = new Date();
let todayDate = d.toDateString();

let dateToday = document.getElementById('dateToday');
let currentDate = document.createElement('h1');
currentDate.innerHTML = 
`
<h1 class="text-xl font-bold">${todayDate}</h1>
`
dateToday.appendChild(currentDate)

document.getElementById('clearBtn').addEventListener('click',function(){
    document.getElementById('container').innerText = "";   
})