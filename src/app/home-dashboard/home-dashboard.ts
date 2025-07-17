// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router'; 

// @Component({
//   selector: 'app-home-dashboard',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './home-dashboard.html',
//   styleUrls: ['./home-dashboard.css']
// })a
// export class HomeDashboard {
//   trendingQuestions = [
//     'How to integrate UPS API with internal tool?',
//     'TSG login issue resolution steps?'
//   ];

//   leaderboard = [
//     { name: 'Alice', points: 120 },
//     { name: 'Bob', points: 98 },
//     { name: 'Carol', points: 87 }
//   ];

//   tags = ['API', 'HR', 'BASE'];

//   badges = [
//     { icon: '🏅', title: 'Top Mentor' },
//     { icon: '💡', title: 'API Expert' },
//     { icon: '🎯', title: 'BASE Champion' }
//   ];

//   metrics = {
//     answers: 45,
//     solutions: 12,
//     upvotes: 87
//   };
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './home-dashboard.html',
  styleUrls: ['./home-dashboard.css']
})
export class HomeDashboard {
  searchKeyword: string = '';
  trendingQuestions: any[] = [];
 
  constructor(private http: HttpClient) {}
 
  quickAsk() {
    if (!this.searchKeyword.trim()) return;
 
    this.http.get<any[]>(`https://upsknowledgehublinux-cde8hvhwf5esemdb.canadacentral-01.azurewebsites.net/api/questions/search?keyword=${this.searchKeyword}`)
      .subscribe({
        next: (data) => this.trendingQuestions = data,
        error: (err) => console.error('Error fetching questions', err)
      });
  }
 
  // You can leave the rest of your existing metrics, tags, etc. as-is
  leaderboard = [
    { name: 'Alice', points: 120 },
    { name: 'Bob', points: 98 },
    { name: 'Carol', points: 87 }
  ];
 
  tags = ['API', 'HR', 'BASE'];
 
  badges = [
    { icon: '🏅', title: 'Top Mentor' },
    { icon: '💡', title: 'API Expert' },
    { icon: '🎯', title: 'BASE Champion' }
  ];
 
  metrics = {
    answers: 45,
    solutions: 12,
    upvotes: 87
  };
 
 
}
