import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-question-thread',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './question-thread.html',
  styleUrls: ['./question-thread.css']
})
export class QuestionThread {
  question = 'How to integrate UPS API with internal tool?';
  tags = ['API', 'Integration', 'BASE'];
  answer = 'A seamless integration ensures smooth communication and support.';
  comments = [
    { user: 'Alice', text: 'I faced a similar issue, let me know if you need help.' },
    { user: 'Bob', text: 'Check with TSG team for API whitelisting.' }
  ];
}
