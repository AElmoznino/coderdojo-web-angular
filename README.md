# CoderdojoWebAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Folder structure:

Inspired by https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7

## Generate types for apollo

If this is the first time you are generating types follow all the steps, but if you already have the apollo installed and downloaded the schema feel free to skit to step number two.

0. Download the apollo cli as a global dependency: `npm i -g apollo`
1. Introspect the schema and download a schema.json file with the following command: `apollo client:download-schema --endpoint=GRAPH_CMS_ENDPOINT schema.json`.
2. Create a .ts file with your query or mutation in the graphql folder. In the typescript file make sure that you are exporting your query or mutation.
3. I have provided a codegen command in the package.json. Run `npm run codegen` to generate the types.
4. Now you can use your types for the desired query or mutation anywhere in the app. The types are are located in folder called --generated-- in src/graphql.

## TODOS:

- [ ] Add types to data returned by GraphCMS
- [ ] Tests
- [x] ~~Add 404 page~~ Redirect to start page if unknown path (i.e. add wildcard route)
- [x] Add else-check for NextLesson with a link to the Level-overview
- [x] Implement References and About pages
- [x] Add scrollrestoration/scroll to top (between page navigation)
- [x] Add loading state/spinner
- [x] Add Chromecheck
- [x] Add icons to buttons/links
- [x] Add multiple languages support. Get Header/Navigation texts from CMS.
- [x] Create helper that creates object of words-query for easier access
- [x] Make responsive
