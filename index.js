// Code your solutions in this file

function writeCards(names, event) {
    const msg = [];
    for (let i = 0; i < names.length; i++) {
        msg.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return msg;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        --num;
    }
    return  0;
}