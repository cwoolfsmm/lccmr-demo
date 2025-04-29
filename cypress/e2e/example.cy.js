describe('Example Test Suite', () => {
    it('should display the correct title', () => {
        cy.visit('http://localhost:3000');
        // cy.title().should('include', 'Your App Title');
    });
    
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:3000');
    });
});