import {Component, Pipe, PipeTransform, Injectable, OnInit} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS, URLSearchParams } from 'angular2/http';
import 'rxjs/add/operator/map';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {KeysPipe} from './pipe';

const API_KEY = '6c759d320ea37acf99ec363f678f73c0:14:74192489';

@Injectable()
class DataApi {
  constructor(private http: Http) {}
  /*
  seachData(query) {
    const endpoint = 'http://localhost:5555/app/dashboard/data.json';
    const searchParams = new URLSearchParams()
    searchParams.set('api-key', API_KEY);
    searchParams.set('q', query);
    
    return this.http
      .get(endpoint, {search: searchParams})
      .map(res => res.json().response.docs);
  }*/
  
  seachData() {
    const endpoint = 'http://localhost:5555/app/dashboard/data.json';
    return this.http
      .get(endpoint)
      .map(res => res.json());
  }
  
  postData(someData) {
    const endpoint = 'http://localhost:5555/app/dashboard/data.json';
    const headers = new Headers({'Content-Type': 'application/json'});
    
    return this.http
      .post(endpoint, JSON.stringify(someData), { headers: headers })
      .map(res => res.json());
  }
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard/dashboard.html',
  styleUrls: ['./dashboard/dashboard.css'],
  directives: [MATERIAL_DIRECTIVES],
  pipes: [KeysPipe],
  providers: [HTTP_PROVIDERS, DataApi]
})



export class DashboardCmp {
  

list = {
        'Facebook': {'photo': ['photo1.jpg'], 'email': ['sri..umalr@gmail.com']}, 
        'Twitter':  {'photo': [], 'email': ['sri..umalr@gmail.com']},
        'Pintrest': {'photo': [], 'email': ['sri..umalr@gmail.com']}, 
        'LinkedIn': {'photo': [], 'email': ['sri..umalr@gmail.com']}
    };

isString(val) { return typeof val === 'string'; }

    constructor(private dataApi: DataApi) {
            
            var meterElem = document.getElementById('topLoader');
            if (meterElem.children.length !== 0){
                meterElem.innerHTML = "";
            }
         
        
            var topLoader = new PercentageLoader(meterElem, {
              width: 256, height: 256, controllable: false, progress: 0, onProgressUpdate: function (val) {
                this.setValue(Math.round(val * 100.0));
              }
            });

            var topLoaderRunning = false;

            /* Some browsers may load in assets asynchronously. If you are using the percentage
             * loader as soon as you create it (i.e. within the same execution block) you may want to
             * wrap it in the below `ready` function to ensure its correct operation
             */
            topLoader.loaded(function () {
             /* document.getElementById('animateButton').addEventListener('click', function () {
                aniLoader();
              });*/
              
              setTimeout(aniLoader, 25);
              
              function aniLoader(){
                  if (topLoaderRunning) {
                      return;
                    }

                    topLoaderRunning = true;

                    var kb = 0;
                    var totalKb = 999;
                    
                    //set the amount to show the prgress * %
                    var progValue = 700;

                    var animateFunc = function () {
                      kb += 3;
                      topLoader.setProgress(kb / totalKb);
                      topLoader.setValue(kb.toString());

                      if (kb < progValue) {
                        setTimeout(animateFunc, 25);
                      } else {
                        topLoaderRunning = false;
                      }
                    };

                    setTimeout(animateFunc, 25);
              
              }
              
            });
  }

        ngOnInit() {
                this.dataApi.seachData().subscribe(res => {
                   this.data = res
                });
              }
               customClose(interesting: boolean) {
                
              }
              
}
