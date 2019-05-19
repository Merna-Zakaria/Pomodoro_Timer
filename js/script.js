console.log('hello')
const actions = {
    start : document.getElementById('start') ,
    pause : document.getElementById('pause') ,
    // break : document.getElementById('break') ,
    resume : document.getElementById('end') ,
    watch : document.getElementById('watch'),
    stopWatch : document.getElementById('stopWatch')
};

let sec = 0 ,
    min = 0 ,
    hrs = 0 ,
    startWork ,
    countWork,
    startBreak,
    countBreak;


function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
  

    let time = h + ':' + m + ':' + s ;
    console.log(time ,h ,m ,s)

    actions.watch.innerText = time ;  
                  
  }
  setInterval( showTime , 1000);




actions.start.addEventListener('click' ,onStart);
actions.pause.addEventListener('click' , onPause);
// actions.break.addEventListener('click' , onBreak);
actions.resume.addEventListener('click' , onResume);







function add(){
   sec++;
   if(sec >= 60){
       sec = 0;
       min++;
       if(min >= 60){
           min=0;
           hrs++;
       }
   }

   actions.stopWatch.textContent=(hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);

}

function onStart(){
    startWork = setInterval(add ,1000) ;
    console.log(startWork)
}

// function onBreak(){
//     sec=0;
//     startBreak=setInterval(add ,1000);
//     actions.start.removeEventListener('click' ,onStart);
// }

function onPause(){
    actions.start.removeEventListener('click' ,onStart);
    
        clearInterval(startWork);
        clearInterval(startBreak);
        console.log("hi" )
}



function onResume(){
    
    startBreak=setInterval(add ,1000) ;
    actions.start.removeEventListener('click' ,onStart);
    // actions.pause.addEventListener('click' , onPause);
    // onPause();
}



