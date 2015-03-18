exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    var tables = request.service.tables;
    //   var push = request.service.push;
    var user = request.user;
    var todoItem = tables.getTable('TodoItem');
    
    todoItem.where({
        userId: user.userId, 
        complete: false
    }).read({
        success: completeAll
    });
    
    function completeAll(items){
        items.forEach(function(item){
            item.complete = true;
            todoItem.update(item);
        });
    }
    
    response.send(statusCodes.OK);
};
