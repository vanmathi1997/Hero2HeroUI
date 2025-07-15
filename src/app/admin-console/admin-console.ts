import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-console',
  standalone: true,
  imports: [CommonModule, NgForOf, FormsModule, RouterModule],
  templateUrl: './admin-console.html',
  styleUrls: ['./admin-console.css']
})
export class AdminConsole {
  categories = [{ name: 'API' }, { name: 'HR' }];
  badges = [{ name: 'Top Mentor' }, { name: 'Bug Buster' }];

  users = [
    { name: 'Alice', answers: 45, solutions: 12, upvotes: 87 },
    { name: 'Bob', answers: 30, solutions: 8, upvotes: 54 }
  ];

  editCategory(category: any) {
    // logic for editing
    console.log('Editing category', category);
  }

  addCategory() {
    this.categories.push({ name: '' });
  }

  addBadge() {
    this.badges.push({ name: '' });
  }

  editBadge(badge: any)
  {

  }
}
