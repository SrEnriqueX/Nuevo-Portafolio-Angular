import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { ItemComponent } from "./pages/item/item.component";
import { AboutComponent } from "./pages/about/about.component";
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(public infoPaginaService:InfoPaginaService){
    
  }
}
