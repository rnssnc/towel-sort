// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    let sortedArray = [];
    matrix.forEach((line, index) => {
        if (index % 2 === 0) sortedArray.push(...line);
        else sortedArray.push(...line.reverse());
    });

    return sortedArray;
};
