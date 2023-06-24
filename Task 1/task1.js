document.getElementById('addTaskBtn').addEventListener('click', function() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  
  if (taskInput.value.trim() !== '') {
      var taskItem = document.createElement('li');
      taskItem.innerHTML = taskInput.value.trim() + ' <button class="delete-btn">Delete</button> <button class="complete-btn">Mark as Completed</button>';
      taskList.appendChild(taskItem);
      
      taskInput.value = '';
  }
});

document.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('delete-btn')) {
      e.target.parentNode.remove();
  }
  
  if (e.target && e.target.classList.contains('complete-btn')) {
      var taskItem = e.target.parentNode;
      taskItem.classList.toggle('completed');
  }
});
