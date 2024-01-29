import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HomeComponent } from "./COMPONENTS/home/home.component";
import { LoginComponent } from "./COMPONENTS/login/login.component";
import { CestaComponent } from "./COMPONENTS/cesta/cesta.component";
import { BusquedaComponent } from "./COMPONENTS/busqueda/busqueda.component";
import { BasicsComponent } from "./COMPONENTS/basics/basics.component";
import { MasVendidosComponent } from "./COMPONENTS/mas-vendidos/mas-vendidos.component";
import { FooterComponent } from "./COMPONENTS/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { environment } from '../environment/environment';
import { UsuarioService } from './services/usuario.services';
import { Observable } from 'rxjs';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { CuentaComponent } from './COMPONENTS/cuenta/cuenta.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        CestaComponent,
        BusquedaComponent,
        BasicsComponent,
        MasVendidosComponent,
        FooterComponent,
        RegisterComponent,
        CuentaComponent        
    ],
    providers: [UsuarioService],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,        
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideMessaging(() => getMessaging()),
        provideStorage(() => getStorage()),


    ]
})
export class AppModule { }
