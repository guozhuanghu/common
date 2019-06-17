var htexports = {
    getByKey: getByKey
};

function getByKey(arr, key, value) {
    var newobj = null;
    if (arr && arr instanceof Array && key && value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][key] == value) {
                newobj = arr[i];
            }
        }
    }
    return newobj;
}

module.exports = htexports;