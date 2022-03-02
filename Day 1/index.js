

let compare = (current, other) => {

    let currentType = Object.prototype.toString.call(current);

    let otherType = Object.prototype.toString.call(other);

    if(['[object Array]', '[object Object]'].indexOf(currentType) < 0 || ['[object Array]', '[object Object]'].indexOf(otherType) < 0) return false;

    if(currentType !== otherType) return false;

    let currentLen = currentType === '[object Array]' ? current.length : Object.keys(current).length;

    let otherLen = otherType === '[object Array]' ? other.length : Object.keys(other).length;

    if(currentLen !== otherLen) return false;

    let equal = (item1, item2) => {
        let itemType = Object.prototype.toString.call(item1);
    
        if(['[object Array]', '[object Object]'].indexOf(itemType) >= 0){
    
            if(!compare(item1, item2)) return false;
    
        } else {
            if(itemType !== Object.prototype.toString.call(item2)) return false;
    
            if(itemType === '[object Function]'){
                if(item1.toString() !== item2.toString()) return false;
            } else {
                if(item1 !== item2) return false;
            }
        }
    }

    if(currentType === '[object Array]'){
        for(var i=0; i<currentLen; i++){
            if(equal(current[i], other[i]) === false) return false;
        }
    } else {
        for(var key in current){
            if(current.hasOwnProperty(key)){
                if(equal(current[key], other[key]) === false) return false;
            }
        }
    }



    return true;
}
