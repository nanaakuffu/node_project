const index = (request, response) => {
    response.send({ name: "Nana Baah" });
}

const show = (request, response) => {
    const id = request.params.id;
    response.send({ id: id, name: 'Nana Baah' });
}

const store = (request, response) => {
    response.send('Data saved');
}

module.exports = {
    getSetups: index,
    addSetup: store
}