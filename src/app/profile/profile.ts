import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  user = {
    name: 'Jane Doe',
    title: 'Sr. Developer',
    department: 'BASE Team'
  };

  contributionMetrics = [
    { label: 'Answers', value: 45 },
    { label: 'Solutions', value: 12 },
    { label: 'Upvotes', value: 87 }
  ];

  activityTimeline = [
    'Answered “BASE pipeline error resolution”',
    'Marked solution on “API request timeout”',
    'Received upvote on “HR policy clarification”'
  ];

  badges = ['Top Mentor', 'API Expert', 'BASE Champion'];
}
