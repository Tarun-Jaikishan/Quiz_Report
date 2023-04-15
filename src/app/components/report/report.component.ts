import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  getApi = ''; // API url

  data: any;

  js = [
    {
      rollno: '2101101',
      totalQuizPoints: 'random',
      totalCorrectQuestions: 'random',
    },
    {
      rollno: '2101102',
      totalQuizPoints: 'random1',
      totalCorrectQuestions: 'random1',
    },
    {
      rollno: '2101103',
      totalQuizPoints: 'random2',
      totalCorrectQuestions: 'random2',
    },
  ];

  // constructor(private http: HttpClient) {
  // this.http.get(this.getApi).subscribe((res) => {
  //   this.data = JSON.parse(JSON.stringify(res));
  //   console.log(res);
  // });
  // }
}
