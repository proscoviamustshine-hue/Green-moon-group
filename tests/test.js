// API testing

// Sample test

describe('API Tests', () => {
    it('should return status 200', async () => {
        const response = await fetch('https://api.example.com/endpoint');
        expect(response.status).toBe(200);
    });
});
