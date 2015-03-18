function update(item, user, request) {
    if(item.userId == user.userId) {
        request.execute();
    }
    else {
        request.respond(401, statusCodes.UNAUTHORIZED);
    }
}