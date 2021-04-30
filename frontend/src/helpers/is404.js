const is404 = error => {
    const { status } = error.response;

    return status === 404;
}

export default is404;