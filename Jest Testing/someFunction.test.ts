import { describe, expect, test, jest, beforeEach, afterEach } from '@jest/globals'
import { sum, gimmeFalsy, errorChucker, promFunc } from './someFunction'

//testing regular functions
describe('Regular function tests', () => {
test('sum 2 params', () => {
    expect(sum(5,5)).toBe(10);
});

test('obj assignment', () => {
    const data = {keyOne: 'valOne'};
    data['keyTwo'] = 'valTwo';
    expect(data).toEqual({ keyOne: 'valOne', keyTwo: 'valTwo'});
});

test('falsy test', () => {
    expect(gimmeFalsy()).toBeFalsy();
});

test('Error throwing', () => {
    expect(() => {
        errorChucker(3);
    }).toThrow();
});
});

//testing async functions
describe('async function tests', () => {
    test('Promise resolve', async () => {
    const result = await promFunc();
    expect(result).toBe('Promise resolved');
    });
});

//testing mocks and spies
describe('Mocks and spies tests', () => {
    test('mock test', () => {
        const mock = jest.fn( (x: number) => 42 + x);
        expect(mock(2)).toBe(44);
        expect(mock).toHaveBeenCalledWith(2);
    });

    test('spying on a method of an object', () => {
        const video = {
            play() {
                return true;
            },
        };

        const spy = jest.spyOn(video, 'play');
        video.play();

        expect(spy).toHaveBeenCalled();
    });
});

//test set ups and teardowns

describe('Array tests', () => {
    let someArray;

    beforeEach(() => {
        someArray = ["someData", 55, "someMoreData", 1234]
    })

    afterEach(() => {
        console.log(someArray)
    })

    test('Should have initial length of 4', () => {
        expect(someArray.length).toBe(4);
    })

    test('add value to end of array', () => {
        someArray.push('yetMoreData');
        expect(someArray[someArray.length - 1]).toBe('yetMoreData');
        expect(someArray.length).toBe(5);
    });
    
    test('remove an element from the array', () => {
        someArray.pop();
        expect(someArray.length).toBe(3);
    });
});