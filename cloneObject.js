/*
This function should take as its arguments:

- a target object (values are only primitives)
- a source object (values are only primitives)

The function should return the target object with all the key-value pairs from the source object copied over.
This function _should_ mutate the target object. This function has identical functionality to 
[`Object.assign()`]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
*/

function cloneObject(targetObj, sourceObj) {
    for (key in sourceObj) {
        targetObj[key] = sourceObj[key];
    }

    return targetObj;
};

module.exports = cloneObject;