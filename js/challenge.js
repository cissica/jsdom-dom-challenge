document.addEventListener("DOMContentLoaded", function(){
    const headers = document.querySelectorAll("h1")
    let counter = headers[1]
    var i = 1;
    let interval = setInterval(increase, 1000);
        
    function increase() {
        counter.innerText= i++;
    };
    let minus = document.querySelector("button")
    minus.addEventListener("click", function(){
       counter.innerHTML -= 1 
    });
    let plus = document.getElementById("plus")
    plus.addEventListener("click", function(){
        counter.innerHTML++
    });
    let pause = document.getElementById("pause")
    pause.addEventListener("click",pauseEventHandler);
    
    function pauseEventHandler(){
    clearInterval(interval);
    pause.innerHTML = "restart";
    minus.disabled = true; 
    plus.disabled = true;
    pause.removeEventListener("click", pauseEventHandler)
    pause.addEventListener("click", resumeEventHandler);
    }

    function resumeEventHandler(){
    counter.innerText = 1
    let interval = setInterval(increase, 1000);
    pause.innerHTML = "pause";
    minus.disabled = false;
    plus.disabled = false;
    pause.removeEventListener("click", resumeEventHandler)
    pause.addEventListener("click", pauseEventHandler);
    }
    let submit = document.getElementById('submit')
    const commentForm = document.getElementsByTagName('input')[0]
    const comments = document.getElementById('list')
    submit.addEventListener("click", function() {
        event.preventDefault();
        const newComment = document.createElement("p");
        let commentInfo = document.createTextNode(`${commentForm.value}`);
        newComment.appendChild(commentInfo);
        comments.appendChild(newComment);
        commentForm.value ='';
      });
});