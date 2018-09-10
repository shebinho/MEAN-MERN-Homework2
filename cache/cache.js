const storage = {};

const cache = {
    getItem : (name) => {
        if (storage[name]) {
            return storage[name];
        }
    },
    setItem : (name, item) => {
        storage[name] = item;
    }
}


module.exports = cache;