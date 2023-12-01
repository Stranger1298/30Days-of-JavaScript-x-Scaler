function deepcompObj(obj1, obj2) {
    if (Object.keys(obj1).length!==Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        else return deepcompObj(obj1[key], obj2[key]);
    }
    return true;
}
//true
// let obj1 = { a: 1, b: 8,  c: 2, d: 3  };
// let obj2 = { a: 1, b: 8, c: 2, d: 3  };
//false
let obj1 = { a: 1, b: 5,  c: 2, d: 6  };
let obj2 = { a: 1, b: 8, c: 2, d: 3  };
console.log(deepcompObj(obj1,obj2));