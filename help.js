
function FAI(key, arr){
    
    if(key == undefined || arr == undefined) return -1;

    for(var i = 0; i < arr.length; i++){
            if(arr[i] == key) return i;
    }
    return -1;

}

module.exports = {
    findArrIndex: function(key, arr){
        return FAI(key, arr);
    }
}