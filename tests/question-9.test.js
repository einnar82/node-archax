const User = require('../src/question-9.js');

// Mock the MyClass module
jest.mock('../src/question-9.js', () => {
    return {
        // Use a Jest mock function for the fetchAllRecords method
        default: jest.fn(() => ({
            fetchAllRecords: jest.fn(() => Promise.resolve([1, 2, 3])),
        })),
    };
});

test('fetchAllRecords returns [1, 2, 3]', async () => {
    // Create an instance of the mocked class
    const user = new User.default();
  
    // Call the fetchAllRecords method
    const result = await user.fetchAllRecords();
  
    // Assert that the result is [1, 2, 3]
    expect(result).toEqual([1, 2, 3]);
});