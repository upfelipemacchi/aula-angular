import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onChangePage(): void {
    setTimeout(()=>{
      const classe = window.location.pathname.replace('/', '') || 'home';
      const active = document.querySelectorAll('.active');
      active.forEach(element => {
        element.classList.remove('active');
      });
      document.querySelector(`.${classe}`)?.classList.add('active');
    }, 50);
  }

}
