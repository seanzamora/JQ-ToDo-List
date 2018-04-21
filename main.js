$(document).ready(function(){

   let deleteAction = ()=>{
        $('.fa-trash').click(function(){

            let task = $(this).parent('li')
            task.remove();

        });
    } 


    $('.btn').click(function(){

        var newTask = prompt("Enter a new task.");

        var formattedTask = ("<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i><i class=\"fa fa-edit\" aria-hidden=\"true\"></i>  </li>"); 
        
        if(newTask != ""){
            $('#task-list').append(formattedTask);
        }
        
        deleteAction();
    });

    deleteAction();

    $("#task-list").sortable();
});