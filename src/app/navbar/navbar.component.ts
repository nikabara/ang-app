import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggle:boolean = false;
  toggleMenu() {
    this.toggle = !this.toggle;
    let toggler:any = document.getElementById("menu-holder-id");
    if (this.toggle) {
      toggler.style.transform = "translateX(0%)";
      toggler.style.overflow = "visible";
    }
    else {
      toggler.style.transform = "translateX(100%)";
      toggler.style.overflow = "hidden";
    }
  }
}