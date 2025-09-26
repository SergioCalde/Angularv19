# Angular v19 ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

# Angular Course Update to version 19

## 01-typescript-intro ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
Reviewing TypeScript basics.

01. Typescript basic types. Review about let and const in javascript/Typescript, also how to assign a type to a variable of type string, number and boolean.
02. Object and Interfaces. Review about objects and interfaces in Typescript.
03. Functions. Review about functions in Typescript, also how to assign a type to a function and how to create a arrow function. Learn about optional parameters and default parameters. Review about interfaces in functions.
04. Homework. Create a super hero interface.
05. Basic Destructuring. Review about basic destructuring in Typescript. Review about arrays destructuring.
06. Function Destructuring. Review about function destructuring in Typescript.
07. Import and Export. Review about import and export in Typescript. Review modules in Typescript.  
08. Classes. Review about classes in Typescript. Review how does the constructor work in classes. Review about public and private access modifiers. Review how to extend a class.
09. Generics. Review about generics in Typescript.
10. Decorators. Learn about decorators in Typescript.
11. Optional Chaining. Learn about optional chaining in Typescript. What it is and how it works. ? 

## 02-bases ![Bases](https://img.shields.io/badge/bases-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
- Review how does standalone components work in Angular. How to create a router, and basic counter component.
- Review and learn about Angular's new signals.
- Review and learn about Angular's new computed signals.
- Review about Angular's pipes.
### 02-bases Expand the bases
- Review about Router Link and Router Link Active. Also review about routerLinkActiveOptions.
- Review about angular @for.
- Review about ngClass and class.classname.
- Review about @if @else.
- Review about how to work with input references and [value].
- Review about use another components and learn new input sintax.
- Review and learn about new output sintax.
- Review about services, how to create the service and how to inject it (with constructor and inject).
- Learn about angular effects.
- Review how to load a signal from localStorage. (LinkedSignal)
- Learn about HashLocationStrategy. Use it to change the router in the url. Check the app.config.ts file.

## GifsApp
- Start with tailwindcss installation. [Tailwindcss](https://tailwindcss.com/docs/installation/framework-guides/angular)
01. Create app, install tailwindcss and add sidebar menu. from [Dashboard Navigation](https://www.creative-tim.com/twcomponents/component/dashboard-navigation)
02. Create dashboard, trending and search components. 
03. Create router and add children routes to dashboard.
04. Create SideMenuComponent and add it to dashboard. (SideMenuHeader and SideMenuOptions).
05. Learn about angular environment variables and path alias.
06. Review how to use @Input and adopt a component-driven mindset.
07. Create Giphy Interface, GifService, learn about mappers and create GifMapper and get trending gifs in GifsService.
08. Create Search Gifs Component, add searchGifs method to GifsService and use it in SearchGifsComponent. Work with RxJS operators (map, tap) and review how to use pipe operator.
09. Learn about typescript [Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) and load history in side menu. 
10. Load history from localStorage and save it to localStorage. Use effect to save it to localStorage. 
11. Create Masonry Layout and use it in TrendingPageComponent. 
12. Use ViewChild to get the scroll div and use it to detect when the user scrolls to the bottom of the div.
13. Load trending gifs in TrendingPageComponent using the scroll event to load more gifs.
14. Save scroll position in scrollStateService and use it to restore scroll position when the user returns to the trending page.

## Country App
- Start with tailwindcss installation. [Tailwindcss](https://tailwindcss.com/docs/installation/framework-guides/angular)
- Then install [DaisyUI](https://daisyui.com/docs/install/)
- Create CountryLayoutComponent and add it to countryRoutes.
- Create a country routes and add it to app.routes.
- Create HomePageComponent and add it to homeRoutes.
- Add footer to app.component.
- Create a top menu component and add it to countryLayoutComponent.
- Create search input component and add it to countryLayoutComponent.
- Create country list component and add it to countryLayoutComponent.
- Create by capital, by country and by region pages and add them to countryRoutes.
- Create country page and add it to countryRoutes, to search country by code dinamically.
- Learn about resource and rxResource.
- Learn how to use decimal pipe.
- Review about mappers.
- Review about how to use the router to navigate to a new page.
- Finish the country page.
- Add cache to the country service.
- learn how to use debounce in search input.
- Learn about linked signals.
- Learn about router query params.
- Learn about router query params in by-capital, by-country and by-region pages.
- Validate the region param in by-region page.

## Pipes App
- Start with tailwindcss installation. [Tailwindcss](https://tailwindcss.com/docs/installation/framework-guides/angular)
- Then install [DaisyUI](https://daisyui.com/docs/install/)
- Create pages and add them to app.routes.
- Create NavbarComponent and add it to app.component.
- Start with basic pipes. (lowercase, uppercase, titlecase) and also number pipes (number, currency, percent). [Pipes](https://angular.dev/guide/templates/pipes)
- Learn about DatePipe and how to use it.
- Learn about i18nSelectPipe and i18nPluralPipe.
- Learn about SlicePipe.
- Learn about JsonPipe.
- Learn about KeyValuePipe.
- Learn about AsyncPipe.