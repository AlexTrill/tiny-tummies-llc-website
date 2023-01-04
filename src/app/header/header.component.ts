import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  home = false;
  path;
  navbarOpen = false;


  name = 'Get Current Url Route Demo';
  currentRoute: string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
   
    
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe( (navEnd:NavigationEnd) => {
      console.log(navEnd.urlAfterRedirects);
      this.path = navEnd.urlAfterRedirects;
      console.log(this.path);
      
      if(this.path === "/home"){
        this.home = true;
        
      }
      
      
      
    }
    )
    console.log(this.path);
    console.log(this.home);
    
     
  }
    
    
  
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
