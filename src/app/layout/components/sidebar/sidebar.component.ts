import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  menuItens = [
    {
      image: '/assets/images/menuIcon.png',
      link: '#'
    },
    {
      image: '/assets/images/searchIcon.png',
      link: '#'
    },
    {
      image: '/assets/images/starIcon.png',
      link: '#'
    },
    {
      image: '/assets/images/chatIcon.png',
      link: '#'
    },
    {
      image: '/assets/images/settingsIcon.png',
      link: '#'
    },
    {
      image: '/assets/images/bankIcon.png',
      link: '#'
    }
  ];

  ngOnInit(): void {
  }

}
