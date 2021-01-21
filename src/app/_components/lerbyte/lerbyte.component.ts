import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-lerbyte',
  templateUrl: './lerbyte.component.html',
  styleUrls: ['./lerbyte.component.css']
})
export class LerbyteComponent implements OnInit {

  myimage;
  base: string;

  base64: Object = '';


  FileSaver: any;

  constructor() { }

  ngOnInit() {
  }

  onChange(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File){
    const observable = new Observable(
      (subscriber: Subscriber<any>)=>{
        this.readFile(file, subscriber);
      });
      observable.subscribe(
        (d) => {
          this.base = d;
          //console.log(d);
          this.myimage = d;
        },
        error=>{
          alert(error);
        }
    );
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload=()=>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
  }

  copy(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}