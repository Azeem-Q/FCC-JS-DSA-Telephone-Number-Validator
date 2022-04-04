function telephoneCheck(str) {
    let teleRegex = /^1? ?-?\d{3}-? ?\d{3}-? ?\d{4}$|^1? ?-?\(\d{3}\)-? ?\d{3}-? ?\d{4}$/;
    return teleRegex.test(str);
}

console.log(telephoneCheck("27576227382"));
