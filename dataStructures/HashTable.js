class NaiveDict {
    constructor() {
        this.keys = [];
        this.values = [];
    }
    set(key, value) {
        this.keys.push(key);
        this.values.push(value);
    }
    get(lookupKey) {
        for (var i = 0; i < this.keys.length; i++) {
            var key = this.keys[i];
            if (key === lookupKey) {
                return this.values[i];
            }
        }
    }
}

class HashTable {
    constructor() {
        this.bucketCount = 100000;
        this.buckets = [];
        for (var i = 0; i < this.bucketCount; i++) {
            this.buckets.push(new NaiveDict());
        }
    }
    hashFunction(key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }
    getBucketIndex(key) {
        return this.hashFunction(key) % this.bucketCount;
    }
    getBucket(key) {
        return this.buckets[this.getBucketIndex(key)];
    }
    set(key, value) {
        this.getBucket(key).set(key, value);
    }
    get(lookupKey) {
        return this.getBucket(lookupKey).get(lookupKey);
    }
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
var dict = new HashTable();



