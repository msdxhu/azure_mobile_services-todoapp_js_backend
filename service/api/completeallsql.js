exports.post = function(request, response) {
    var mssql = request.service.mssql;
    var sql = 
        "UPDATE todoitem SET complete = 1 " +
        "WHERE complete = 0; SELECT @@ROWCOUNT as count";
    mssql.query(sql, {
        success: function(results) {
            if(results.length == 1)
                response.send(200, results[0]);
        }
    });
};
