function markOverdue() {
    var today = new Date();
    var todoItems = tables.getTable('TodoItem');
    console.log('job started: '+today);
    todoItems.read({
        success: markOverdue
    });
        
    function markOverdue(results) {
        console.log('# of results: '+results.length);
        results.forEach(function(item) {
            console.log('checking item: '+item);
            if(item.duedate > today) {
                console.log('item duedate: '+item.duedate);
                item.overdue = true;
                todoItems.update(item);
                console.log('item marked!');
            }
        });
    }
  }
