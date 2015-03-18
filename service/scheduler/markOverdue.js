function markOverdue() {
    var today = new Date();
    var todoItems = tables.getTable('TodoItem');
    todoItems.read({
        success: markOverdue
    });
        
    function markOverdue(results) {
        results.forEach(function(item) {
            if(item.dueDate > today) {
                item.overdue = true;
                todoItems.update(item);
            }
        });
    }
  }
