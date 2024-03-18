import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { CuentaComponent } from './COMPONENTS/cuenta/cuenta.component';
import { ProductoComponent } from './COMPONENTS/producto/producto.component';
import { ProductoServices } from './services/producto.services';
import { QuitarEspaciosPipe } from './quitar-espacios.pipe';
import { NgImageSliderModule } from 'ng-image-slider';
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
        CuentaComponent,
        ProductoComponent,
        QuitarEspaciosPipe
    ],
    providers: [UsuarioService,ProductoServices],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        NgImageSliderModule,        
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideMessaging(() => getMessaging()),
        provideStorage(() => getStorage()),


    ]
})
export class AppModule { }
