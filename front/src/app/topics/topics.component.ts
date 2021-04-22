import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics = [
    {
      id: 1, 
      name: "Front-End Development",
      description: "This section is for getting help with anything front-end related. This refers to anything that is visible to the user."
    },
    {
      id: 2,
      name: "Back-End Development",
      description: "This section is for getting help with anything Back-end related. This refers to anything that is server-related or in other words what's under the hood e.g. Engine."
    },
    {
      id: 3,
      name: "Project Development",
      description: "Working with multiple languages? This is your spot to ask for help."
    },
    {
      id: 4,
      name: "Computer, Server and Hardware Configurations",
      description: "Get help with setting up your computer, server and hardware. From installing software and configuring to installing hardware."
    },
    {
      id: 5,
      name: "The Hub",
      description: "Everything from site-rules, announcements etc to tech-related discussions, member introductions, suggestions and site support."
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
