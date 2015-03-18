exports.post = function(request, response) {
    var tables = request.service.tables;
    var push = request.service.push;
    var todoItems = tables.getTable('TodoItem');
    response.send(statusCodes.OK, { message : 'Hello World!' });
};
