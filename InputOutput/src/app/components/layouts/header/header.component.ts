import { Component } from '@angular/core';
import { PageService } from '../../../services/page.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  counter: number = 0;

  constructor(pageService:  PageService) {
    pageService.counterObs.subscribe((counter: number) => {
      this.counter = counter;
    });
   }

}
