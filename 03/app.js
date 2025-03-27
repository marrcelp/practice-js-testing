export default function randomNumber(min, max) {

    if(typeof min !== 'number' || typeof max !== 'number'){
        throw new Error ('Property have to be a number!');

    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}