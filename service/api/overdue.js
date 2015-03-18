exports.post = function(request, response) {
    var today = new Date();
    var tables = request.service.tables;
    var push = request.service.push;
    var todoItems = tables.getTable('TodoItem');
    todoItems.read( {
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
    response.send(statusCodes.OK, { message : 'Hello World!' });
};
