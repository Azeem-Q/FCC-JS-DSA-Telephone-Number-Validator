function telephoneCheck(str) {
    let strArr = str.split('');
    let filteredArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (Boolean(strArr[i].match(/[()\s]/)) == false) {
            filteredArr.push(strArr[i]);
        }
    }
    console.log(Boolean(...filteredArr.match(/[0-9]/g).length == 10));
    for (let i of filteredArr) {
        if (Boolean(i.match(/[0-9-]/)) == false) {
            return false;
        }
    }
    if (filteredArr[0] == '-' || filteredArr[0] != '1') {
        return false;
    }   else if (Boolean(...filteredArr.match(/[0-9]/g).length == 10) == true || Boolean(...filteredArr.match(/[0-9]/g).length == 11) == true){
        return true;
    }
}

console.log(telephoneCheck("(555) 555-5555"));