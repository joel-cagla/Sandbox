const sum = (a: number, b: number) =>  {
    return a + b
}

const gimmeFalsy = () => {
    return null;
}

const errorChucker = (arg: number) => {
    if (arg % 2 != 0)  {
        throw new Error('You must pass an even number. Have an error!')
    }
    return arg
}

const promFunc = async () => {
    
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise resolved'), 1000); 
    });
} 

export {
    sum,
    gimmeFalsy,
    errorChucker,
    promFunc
} 