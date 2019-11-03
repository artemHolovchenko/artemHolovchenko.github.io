let list = document.querySelector('ul');
let todo;
let local = () => {
  todo = list.innerHTML;
  localStorage.setItem("todo",todo);
}
if(localStorage.getItem("todo")){
  list.innerHTML = localStorage.getItem("todo");
}




let create = document.querySelector("button.action__todo__button");
let show__create = document.querySelector(".create__todo");
let save = document.querySelector(".save");
let cancel = document.querySelector(".cancel");
let tasks = document.querySelector(".task_todo");
let main = document.getElementById("main");
let seacrhInput = document.querySelector(".action__todo__input");



create.addEventListener('click', () =>{
    document.querySelector('.title').value ="";
   document.querySelector('.description').value ="";
   show__create.style.display = "block";
   main.style.opacity ="0.2";
   tasks.style.opacity = "0.2";
   show__create.style.overflow = "hidden";
   local();

})


function close(){
    show__create.style.display = "none";
    show__create.style.overflow = "";
    main.style.opacity ="1";
    tasks.style.opacity = "1";
    local();
}



cancel.addEventListener('click', close);


save.addEventListener('click', () =>{
    let inputValue1 = document.querySelector('.title').value;
    let inputValue2 = document.querySelector('.description').value;

    if(inputValue1 ==="" || inputValue2 === ""){
        alert("Error, please write all values")
    }

    else{
        let div = document.createElement('li');
        div.classList.add("task__content")
        tasks.appendChild(div);
        let a = document.querySelector('.create__todo__select');
        let inputValue3 = a.options[a.selectedIndex].value;



        let input1 = document.createTextNode(inputValue1);
        let p_input1 = document.createElement('p');
        p_input1.appendChild(input1);
        div.appendChild(p_input1);

        let input2 = document.createTextNode(inputValue2);
        let p_input2 = document.createElement('p');
        p_input2.appendChild(input2);
        div.appendChild(p_input2);


        let input3 = document.createTextNode(inputValue3);
        let p_input3 = document.createElement('button');
        p_input3.appendChild(input3);
        let p_input4 = document.createElement('div');
        p_input4.classList.add("contact__input__header")
        p_input4.appendChild(p_input3)
        



        
        let array = ["...", "done", "edit", "delete"];
        let selectList = document.createElement('select');
        selectList.classList.add("mySelect");
        p_input4.appendChild(selectList);
        div.appendChild(p_input4);
        for(let i=0; i<array.length; i++){
            let option = document.createElement('option');
            option.value = array[i];
            option.text = array[i];
            selectList.appendChild(option);
        }

        
        close();
        local();

    }

})





seacrhInput.addEventListener("input", function(){
    let val = this.value;
    let elastic = document.querySelectorAll('.task_todo li');
    if( val != " "){
        elastic.forEach((elem) =>{
            let sel1 = document.querySelector(".action__todo__select1").value;
            let sel2 = document.querySelector(".mySelect").value;
            if(elem.innerText.search(val) !== -1 && ( (sel1 == "all" &&(sel2 == "..." || sel2 == "done") ||(sel1 =="done" && sel2 == "done") ))){
                elem.classList.remove('hide');
            }
            else{
                elem.classList.add('hide');
            }
        })
    }
    local();
})




   setInterval(go,100);

    function go(){
    let selectobject = document.querySelectorAll(".mySelect");
    selectobject.forEach((del)=>{
        del.addEventListener("change", ()=>{
            let inp = del.selectedIndex;
            if(inp == "3"){
                del.parentNode.parentNode.remove();
            }
        })
    })
    local()
    }



  