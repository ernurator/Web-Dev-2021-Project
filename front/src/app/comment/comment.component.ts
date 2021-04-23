import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [DatePipe]
})
export class CommentComponent implements OnInit {

  constructor(){}


  comments = [
    {
      id: 1,
      text: 'this is working comment Welcome to the first course of the Cisco Networking Academy CCNAv7 curriculum, Introduction to Networks (ITN). This is the first of three courses that are aligned to the CCNA Certification Exam. ITN contains 17 modules, each with a series of topics.\n' +
        'In Introduction to Networks, you will gain a basic understanding of the way networks operate. You will learn about network components and their functions, as well as how a network is structured, and the architectures used to create networks, including the internet.\n' +
        'But ITN is about more than learning networking concepts. By the end of this course, you will be able to build local area networks (LANs), configure basic settings on routers and switches, and implement internet protocol (IP).\n' +
        'In ITN, every concept that you learn and skill that you develop will be used in the rest of the CCNA curriculum. Now is the time to supercharge your networking career and let Cisco Networking Academy help you to reach your goal!',
      date: new Date(),
      likes: 0,
      author: 'Yernur',
      post_id: 0,
      watch: true
    },
    {
      id: 2,
      text: 'Тексту́ра — растровое изображение, накладываемое на поверхность полигональной модели для придания ей цвета, окраски или иллюзии рельефа. Приблизительно использование текстур можно легко представить как рисунок на поверхности скульптурного изображения.',
      date: new Date(),
      likes: 0,
      author: 'El`vina',
      post_id: 0,
      watch: true
    },
    {
      id: 3,
      text: 'Существует метафорическое представление о тексте, как о лабиринте, в котором блуждают его читатели и исследователи, или спутанном клубке, который подлежит распутыванию. Не существует универсальной теории выхода из лабиринта или распутывания клубков, есть лишь некоторые эвристические принципы, которым бывает полезно следовать. Однако когда вы приступаете к распутыванию клубка, у вас заранее не может быть гарантий, что вы его сумеете распутать до конца; равным образом, не сумев его распутать, вы не имеете права утверждать, что этот клубок является нераспутываемым в принципе.\n' +
        'Распутывание клубка производится извне, а разгадывание лабиринта изнутри.\n' +
        'В тексте скрывается сам автор, текст - есть свидетельство о нём; каждое творение содержит в себе - в том или ином виде - образ своего творца.',
      date: new Date(),
      likes: 0,
      author: 'Akniyet',
      post_id: 0,
      watch: true
    }
  ];
  ngOnInit(): void {
  }
  getLike(id: number){
    this.comments[id-1].likes++;
  }
  remove(id:number){
    this.comments[id-1].watch = false;
  }

}
