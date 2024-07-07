function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandom(0, 15));

if (getRandom(0, 15) == 10) {
    console.log("right");
}else{
    console.log('faild');
}