var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var all_1 = require('ng2-material/all');
var pipe_1 = require('./pipe');
var API_KEY = '6c759d320ea37acf99ec363f678f73c0:14:74192489';
var DataApi = (function () {
    function DataApi(http) {
        this.http = http;
    }
    DataApi.prototype.seachData = function () {
        var endpoint = 'http://localhost:5555/app/dashboard/data.json';
        return this.http
            .get(endpoint)
            .map(function (res) { return res.json(); });
    };
    DataApi.prototype.postData = function (someData) {
        var endpoint = 'http://localhost:5555/app/dashboard/data.json';
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(endpoint, JSON.stringify(someData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataApi);
    return DataApi;
})();
var DashboardCmp = (function () {
    function DashboardCmp(dataApi) {
        this.dataApi = dataApi;
        this.list = {
            'Facebook': { 'photo': ['photo1.jpg'], 'email': ['sri..umalr@gmail.com'] },
            'Twitter': { 'photo': [], 'email': ['sri..umalr@gmail.com'] },
            'Pintrest': { 'photo': [], 'email': ['sri..umalr@gmail.com'] },
            'LinkedIn': { 'photo': [], 'email': ['sri..umalr@gmail.com'] }
        };
        var meterElem = document.getElementById('topLoader');
        if (meterElem.children.length !== 0) {
            meterElem.innerHTML = "";
        }
        var topLoader = new PercentageLoader(meterElem, {
            width: 256, height: 256, controllable: false, progress: 0, onProgressUpdate: function (val) {
                this.setValue(Math.round(val * 100.0));
            }
        });
        var topLoaderRunning = false;
        topLoader.loaded(function () {
            setTimeout(aniLoader, 25);
            function aniLoader() {
                if (topLoaderRunning) {
                    return;
                }
                topLoaderRunning = true;
                var kb = 0;
                var totalKb = 999;
                var progValue = 700;
                var animateFunc = function () {
                    kb += 3;
                    topLoader.setProgress(kb / totalKb);
                    topLoader.setValue(kb.toString());
                    if (kb < progValue) {
                        setTimeout(animateFunc, 25);
                    }
                    else {
                        topLoaderRunning = false;
                    }
                };
                setTimeout(animateFunc, 25);
            }
        });
    }
    DashboardCmp.prototype.isString = function (val) { return typeof val === 'string'; };
    DashboardCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.dataApi.seachData().subscribe(function (res) {
            _this.data = res;
        });
    };
    DashboardCmp.prototype.customClose = function (interesting) {
    };
    DashboardCmp = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <div layout=\"row\" layout-wrap=\"\" class=\"layout-wrap dashboard-layout layout-row\">\n        <div flex=\"33\" class=\"flex-33\">\n            <div id=\"topLoader\">      \n            </div>\n        <!--button id=\"animateButton\"  class=\"md-raised buttonRounded\" md-raised-button>\n            <span class=\"md-button-wrapper\">Test your Score</span><div class=\"md-ripple-container\"></div></button-->\n        \n            <br />\n            <h2>App Score</h2>\n            <p>\n                Dummy Content Dummy Content Dummy Content Dummy Content Dummy Content Dummy Content Dummy Content \n            </p>\n        </div>\n        <div flex=\"66\" class=\"flex-66\">\n        \n            <md-card layout-margin>\n            <md-card-content>\n                  <div class=\"group\">\n                    <h1 class=\"md-headline\">Alert</h1>\n                        <p class=\"md-subhead\">Hackers Spying on US Presidential Campaigns: Official</p>\n                      <p>\"We've already had some indications\" of hacking, James Clapper, director of national intelligence, said Wednesday at the Bipartisan Policy Center in Washington.</p>\n                  </div>\n              \n              </md-card-content>\n            </md-card>\n            <md-card layout-margin>\n              <md-card-content>\n              \n                  <div class=\"group\">\n                      <!--ul>\n                        <li *ngFor=\"#d of data | async\"> {{d.headline.main}} </li>\n                     </ul-->\n                    <md-list>\n                      <md-list-item *ngFor=\"#s of data | keyValues\">\n                          <div>\n                          <img [alt]=\"s.key\" [src]=\"'./assets/avatars/' + s.key + '.png'\" class=\"md-avatar\" />\n                                {{ s.key }}\n                              </div>\n                           <ul class=\"hori-li\">\n                               <li *ngFor='#t of s.value | keyValues' (click)=\"custom.show()\">\n                                   <!--label *ngIf=\"isString(t[value])\">{{t.value}}</label-->\n                                   <label *ngIf=\"t.key == 'photo' && t.value != ''\">{{t.key}}</label>\n                                   <label *ngIf=\"t.key != 'photo' && t.value != ''\">{{t.value}}</label>\n                               </li>\n                          </ul>\n                    \n                      </md-list-item>\n                    </md-list>\n                  </div>\n              </md-card-content>\n            </md-card>\n        </div>\n    </div>\n\n\n    <!--div class=\"md-padding\" id=\"popupContainer\">\n      <p class=\"inset\">\n        Open a dialog over the app's content. Press escape to close the dialog and send focus back to the triggering button.\n      </p>\n      <div class=\"dialog-demo-content\" layout-gt-md=\"row\" layout=\"column\" layout-margin>\n    \n   \n        <md-dialog #custom (onClose)=\"customClose($event)\">\n          <form>\n            <h2 class=\"md-title\">{{fruit}} (Fruit)</h2>\n            <div>\n              <p>\n                The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous\n                tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species\n                are found in nature as wild mangoes. They all belong to the flowering plant family\n                Anacardiaceae. The mango is native to South and Southeast Asia, from where it has been\n                distributed worldwide to become one of the most cultivated fruits in the tropics.\n              </p>\n              <p>\n                The highest concentration of Mangifera genus is in the western part of Malesia (Sumatra,\n                Java and Borneo) and in Burma and India. While other Mangifera species (e.g. horse mango,\n                M. foetida) are also grown on a more localized basis, Mangifera indica&mdash;the \"common\n                mango\" or \"Indian mango\"&mdash;is the only mango tree commonly cultivated in many tropical\n                and subtropical regions.\n              </p>\n              <p>\n                It originated in Indian subcontinent (present day India and Pakistan) and Burma. It is the\n                national fruit of India, Pakistan, and the Philippines, and the national tree of\n                Bangladesh. In several cultures, its fruit and leaves are ritually used as floral\n                decorations at weddings, public celebrations, and religious ceremonies.\n              </p>\n            </div>\n          </form>\n          <md-dialog-actions>\n        \n            <button md-button (click)=\"custom.close(false)\">\n              <span>Ignore</span>\n            </button>\n            <button md-button class=\"md-primary\" (click)=\"custom.close(true)\">\n              <span>Interesting...</span>\n            </button>\n          </md-dialog-actions>\n        </md-dialog>\n   \n      </div>\n  \n  \n    </div-->\n  ",
            styles: ["\n    .info-receive{position:absolute;width:500px;top:10%;left:30%}md-card.info-receive img{width:226px;height:186px;align-self:center;margin-bottom:15px}#popupContainer{position:relative}.footer{width:100%;text-align:center}.footer,.footer>code{font-size:.8em;margin-top:50px}\n  "],
            directives: [all_1.MATERIAL_DIRECTIVES],
            pipes: [pipe_1.KeysPipe],
            providers: [http_1.HTTP_PROVIDERS, DataApi]
        }), 
        __metadata('design:paramtypes', [DataApi])
    ], DashboardCmp);
    return DashboardCmp;
})();
exports.DashboardCmp = DashboardCmp;
