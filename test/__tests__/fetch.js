const { getPeopleAsync, getPeoplePromised } = require('../../fetch');
const fetch = require('node-fetch');

it('gets people using done method', () => {

const mockFetch = jest.fn()
                    .mockReturnValue(Promise.resolve({
                        json: () => Promise.resolve({
                            count: 87,
                            results: [1, 2, 3, 4, 5]
                        })
                    }))
    expect.assertions(2)
    return getPeopleAsync(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toHaveBeenCalledWith('https://swapi.co/api/people');
    })
});