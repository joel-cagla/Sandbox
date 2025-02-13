import { expect, test } from '@jest/globals'
import sum from './someFunction'

test('sum 2 params', () => {
    expect(sum(5,5)).toBe(10);
});