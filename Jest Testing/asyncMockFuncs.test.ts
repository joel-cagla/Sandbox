import { describe, expect, test, jest, beforeEach, afterEach } from '@jest/globals'
import swapiGetter from './asyncMockFuncs';

jest.mock('axios')

describe('swapi getter tests', () => {

    test('returns a name', async () => {
        const result = await swapiGetter(1);
        console.log(result);
        expect(result).toBe('Luke Skywalker');
    });

});