/**
 * @param {number} capacity
 */
let LRUCache = function(capacity) {
    this.maxCapacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

    if(this.map.has(key)) {
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
       
    } 
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     /* 
        Deleting the element and re-setting the value in the map puts the key/value pair
        in the back of the map.key iterator, setting the least-recently used value as the
        first element in the iterator array.
     */
    if(this.map.has(key)) {
        this.map.delete(key);
    }
    
    this.map.set(key, value);
    // The actual "caching" mechanism, removing the first element in the iterator
    if(this.map.size > this.maxCapacity) {
        this.map.delete(this.map.keys().next().value)
    }
};
