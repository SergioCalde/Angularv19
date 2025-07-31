import { Routes } from "@angular/router";
import { ByCapitalComponent } from "./pages/by-capital/by-capital.component";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.component";

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path:'by-capital',
                component: ByCapitalComponent,
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