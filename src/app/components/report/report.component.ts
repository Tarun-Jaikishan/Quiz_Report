import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  getApi = 'https://shy-rose-octopus-fez.cyclic.app/results'; // API url

  data: any;

  js = [
    {
      _id: 'random',
      rollNo: '2101101',
      totalQuizPoints: 'random',
      totalCorrectQuestions: 'random',
    },
    {
      _id: 'random1',
      rollNo: '2101102',
      totalQuizPoints: 'random1',
      totalCorrectQuestions: 'random1',
    },
    {
      _id: 'random2',
      rollNo: '2101103',
      totalQuizPoints: 'random2',
      totalCorrectQuestions: 'random2',
    },
  ];

  constructor(private http: HttpClient) {
    this.http.get(this.getApi).subscribe((res) => {
      this.data = JSON.parse(JSON.stringify(res));
      this.js = this.data;
      console.log(res);
    });
  }

  deleteAll() {
    this.http.delete(this.getApi).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  deleteInduvidual(id: string) {
    this.http.delete(`${this.getApi}/${id}`).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}
