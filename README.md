# StarwarsPlanets
![Codecov](https://img.shields.io/badge/Code_Coverage-95%-<COLOR>)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

Es wurde ein ParentComponent Planet-List und zwei ChildComponents erstellt. die Planetslist wird über SWAPI importiert und die Namen an der ChildComponent (Planet) weitergeleitet
danach wurde ein Eventemmitet von dem Childcomponent(planet), das zu dem Clicken auf das Component selbst reagiert und der Siblingcomponent notifiziert mit dem Planet ermittelt. damit zeigt der SiblingComponent die Details zu der Planet, der auf der Liste geclickt wurde.

## Cypress:
To run Cypress in the project
$npm run cypress:open // to run cypress gui
$npm start // for the project to seperate it from the backend api.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


