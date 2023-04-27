import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openBurger: boolean = false;

  constructor() {

  }

  scrollAbout() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  scrollProjects() {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })
  }

  scrollContact() {
    if (window.innerWidth < 600 && window.innerHeight < 700) {
      console.log("if");
      window.scrollTo({ top: window.innerHeight * 4.47, behavior: 'smooth' })
    } else {
      console.log("else");
      window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })
    }
  }

  openBurgerMenu() {
    this.openBurger == false ? this.openBurger = true : this.openBurger = false;
  }

  closeBurgerMenu() {
    this.openBurger = false;
  }
}




