import { Component } from '@angular/core';

@Component({
  selector: 'app-webcourses',
  templateUrl: './webcourses.component.html',
  styleUrls: ['./webcourses.component.css']
})
export class WebcoursesComponent {
    coursesfront=[{src:'../../assets/web front c 1.png',title:'HTML',description:'Learn HTML',},
    {src:'../../assets/web front c 2.png',title:'CSS',description:'Learn CSS',},
    {src:'../../assets/web front c 3.jpg',title:'JavaScript',description:'Learn JavaScript',},
    {src:'../../assets/web front c 4.png',title:'Bootstrap',description:'Learn Bootstrap',}];

    coursesback=[{src:'../../assets/web back c 1.png',title:'PHP',description:'Learn PHP',},
    {src:'../../assets/web back c 2.png',title:'MySQL',description:'Learn MySQL',},
    {src:'../../assets/web back c 3.jpg',title:'Laravel',description:'Learn Laravel',},
    {src:'../../assets/web back c 4.jpg',title:'NEXT.JS',description:'Learn NEXT.JS',}
    ]
}
