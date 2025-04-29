describe('Example Test Suite', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('should display the correct app name', () => {
        
        cy.title().should('include', 'LCCMR Demo App');
    });
    
    it('Display Home Page Header Title', () => {
        cy.get('h1').should('have.text', 'Minnesota: Our Environment. Our Stories.');
    });

    it('Display Home Page Footer Text and Logo', () => {
        cy.scrollTo('bottom');
        cy.get('footer').should('contain.text', 'Visit the Science Museum of Minnesota');
    });
});