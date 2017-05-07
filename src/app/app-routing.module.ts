import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './company-pages/home/home.component';
import { AboutComponent } from './company-pages/about/about.component';
import { SolutionComponent } from './company-pages/solution/solution.component';
import { ProductComponent } from './company-pages/product/product.component';
import { ContactComponent } from './company-pages/contact/contact.component';
import { ServicesComponent } from './company-pages/services/services.component';

import { PhoneComponent } from './company-pages/contact/phone/phone.component';
import { AddressComponent } from './company-pages/contact/address/address.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';


const routes: Routes = [
	{
	    path: 'home',
	    component: HomeComponent
	},
	{
	    path: 'about',
	    component: AboutComponent
	},
	{
	    path: 'solution',
	    component: SolutionComponent
	},
	{
	    path: 'product',
	    component: ProductComponent
	},
	{
	    path: 'contact',
	    component: ContactComponent
	},
	{
	    path: 'services',
	    component: ServicesComponent
	},
	{
	    path: 'contact',
	    children: [
	    	{
			    path: 'phone',
			    component: PhoneComponent
			},
			{
			    path: 'address',
			    component: AddressComponent
			},
	    ]
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard',  component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
