function updateTotalCount(target){  
   let totalAmount = parseInt(document.getElementById('totalAmount').innerText);
   sum = totalAmount + 1 ;
   alert("Board Updated Successfully")
   document.getElementById('totalAmount').innerText = sum;
}

function updateTaskCount(target){  
    let taskCount = parseInt(document.getElementById('taskCount').innerText);
    sum = taskCount - 1 ;
    document.getElementById('taskCount').innerText = sum;

    if(sum < 1){
        alert("Congrates !!! You have completed all the current Task")
    }
 }


//  For Change Background Colour
function changeColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}





 

