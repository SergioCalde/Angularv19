import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital.component";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path:'by-capital',
                component: ByCapitalPageComponent,
            },
            {
                path:'by-country',
                component: ByCountryPageComponent,
            },
            {
                path:'by-region',
                component: ByRegionPageComponent,
            },
            {
                path:'by/:code',
                component: CountryPageComponent,
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            }
        ]
    },
    // {
    //     path: 'country',
    // },
];

export default countryRoutes;