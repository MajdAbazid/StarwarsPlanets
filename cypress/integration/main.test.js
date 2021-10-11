describe("homepage",() => {
  beforeEach(()=>{
    cy.fixture('planets.json').as("planetsJSON");//simulating the response of the http request. access the file
    cy.server(); //simulating the server
    cy.route('https://swapi.dev/api/planets', "@planetsJSON").as("planets");/*linking our planets.json to http request*/
    cy.visit('/');
    //cy.intercept('api/planets', "@planetsJSON").as("planets");TODO migrate from server/route to intercept
  });

  it('only accepts a string value', ()=>{
    const input2 =  Math.random().toString(36).substr(2, 2);
    cy.get("input").should('have.class', 'form-control').type(input2);
    cy.get('app-planet').contains(input2);
  });


  it('should display a list of 60 planets', ()=>{

  cy.contains("Galaxy");

  cy.wait('@planets');
  //cy.wait// wait for the response to be simulated and the data are displayed on the screen

  // expect(status).to.eq(200); // TODO try use with wait => then expect! yes
  cy.get("app-planet").should("have.length", 60);// look for particular element on the page
  });

  it('should display planet details', ()=>{
  cy.wait('@planets');
  cy.get("app-planet").click({multiple: true});
  //cy.get('app-planet-details .list-group-item').its('length').should('be.gt', 8);
  cy.get('app-planet-details').should("have.length", 1);
  });


});
