import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: Profile = { name: "", email: "", birthYear: 0 };
  pet: string | null = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
    this.pet = this.profileService.getPet();
  }

}
