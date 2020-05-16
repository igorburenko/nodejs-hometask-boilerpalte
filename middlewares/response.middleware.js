

const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query

    if (res.err && res.err.message === 'User not found') {
        const errorJson = {
            error: true,
            message: 'User not found'
        };
        res.status(404).send(errorJson);

    } else if (res.err && res.err.message === `User entity to create isn't valid`) {
        const errorJson = {
            error: true,
            message: res.err.message
        };
        res.status(400).send(errorJson);

    } else {
        res.status(200).send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;
