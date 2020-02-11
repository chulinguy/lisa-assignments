function invert(object) {
    const result = {};
    for (let key in object) {
        let val = object[key];

        // convert objects and arrays to strings so they can be set as keys
        if (typeof val === 'object') {
          val = JSON.stringify(val);
        }

        result[val] = key;
    }

    return result;
}

module.exports = invert;