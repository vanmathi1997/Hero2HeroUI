import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-dashboard.html',
  styleUrls: ['./home-dashboard.css']
})
export class HomeDashboard {
  trendingQuestions = [
    'How to integrate UPS API with internal tool?',
    'TSG login issue resolution steps?'
  ];

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
