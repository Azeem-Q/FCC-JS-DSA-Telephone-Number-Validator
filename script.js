function telephoneCheck(str) {
    return /^\s*(?:\+?(1{1,1}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(str);
}

console.log(telephoneCheck("27576227382"));
