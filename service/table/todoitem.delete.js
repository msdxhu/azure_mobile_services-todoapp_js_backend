function del(id, user, request) {
    if(item.userId == user.userId) {
        request.execute();
    }
    else {
        request.respond(statusCodes.UNAUTHORIZED);
    }
}
