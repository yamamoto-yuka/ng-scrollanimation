import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // sction one
  @ViewChild('centerBox', {static:true}) centerBox:ElementRef<HTMLDivElement>

  
  constructor(){
  }
  ngOnInit(){
  }
}

