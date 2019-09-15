const getSortedNamesList = (request, response) => {
    const sortedList = request.body.names.sort();
    const sortedObjectsList = sortedList.map(item => ({
        name: item,
    }))
    return response.send(sortedObjectsList);
}

module.exports = getSortedNamesList;
