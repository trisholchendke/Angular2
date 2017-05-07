import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { HomeComponent } from './company-pages/home/home.component';
import { AboutComponent } from './company-pages/about/about.component';
import { SolutionComponent } from './company-pages/solution/solution.component';
import { ProductComponent } from './company-pages/product/product.component';
import { ContactComponent } from './company-pages/contact/contact.component';
import { ServicesComponent } from './company-pages/services/services.component';

import { HighlightDirective } from './custome-directives/highlight/highlight.directive';
import { PhoneComponent } from './company-pages/contact/phone/phone.component';
import { AddressComponent } from './company-pages/contact/address/address.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { LoginComponent } from './company-pages/login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        SolutionComponent,
        ProductComponent,
        ContactComponent,
        ServicesComponent,
        HighlightDirective,
        PhoneComponent,
        AddressComponent,
        PageNotFoundComponent,
        LoginComponent,
        FeedbackComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
