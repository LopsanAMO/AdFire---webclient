import { NgModule, Component, OnInit } from '@angular/core';
//import jQuery from './node_modules/@types/jquery';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';
import * as $ from 'jquery';

declare var jquery:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})



export class FormComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 19.432608;
  lng: number = -99.133209;


  constructor(){}

  ngOnInit(){}
  /*ngOnInit() {
    
    function initMap(){
      var options = {
        zoom:8,
        center:{lat:19.432608,lng:-99.133209}
      }

      var map = new google.maps.Map(document.getElementById('map'), options);
  
  }//ngOnInit*/


}

