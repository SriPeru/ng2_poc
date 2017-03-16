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
var router_1 = require('angular2/router');
var ScanCmp = (function () {
    function ScanCmp() {
    }
    ScanCmp = __decorate([
        core_1.Component({
            selector: 'login',
            directives: [router_1.RouterLink],
            template: "\n    <md-card layout-margin class=\"scan\">\n        <img src=\"./assets/img/Logo-Big.png\" class=\"md-card-image\" alt=\"Imagery\" width=\"226\" height=\"186\">\n        <p class=\"title-info\">See your AppScore Online\n        <br />\n        <br />\n        </p>\n      <md-card-content>\n         <button  class=\"md-raised buttonRounded buttonBlue\" md-raised-button [routerLink]=\"['/Dashboard']\">\n              <span class=\"md-button-wrapper\">One Time Scan</span><div class=\"md-ripple-container\"></div></button>\n      \n          <button  class=\"md-raised buttonRounded\" md-raised-button>\n              <span class=\"md-button-wrapper\">Login with Facebook</span><div class=\"md-ripple-container\"></div></button>\n      </md-card-content>\n        <md-card-actions layout=\"row\" layout-align=\"center center\">\n            <button [routerLink]=\"['/Login']\" md-button>Login with Email</button>\n            <button [routerLink]=\"['/Create']\" md-button>Create Account</button>\n          </md-card-actions>\n    </md-card>\n  ",
            styles: ["\n    input,label{font-size:18px}.bar,input{display:block}.highlight,label{pointer-events:none}.buttonRounded:focus,input:focus{outline:0}md-card.scan{width:500px;margin:4em auto;padding:3em 2em 2em;background:#f6f8fc;border:0;box-shadow:rgba(0,0,0,.14902) 0 5px 7px 0,rgba(0,0,0,.09804) 0 1px 1px 0}.bar,input{width:100%}.group{position:relative;margin-bottom:45px}input{padding:10px 10px 10px 5px;-webkit-appearance:none;background:#fafafa;color:#636363;border:none;border-radius:0;border-bottom:1px solid #757575}label{color:#999;font-weight:400;position:absolute;left:5px;top:10px;transition:all .2s ease}.title-info{width:100%;text-align:center}input.used~label,input:focus~label{top:-20px;transform:scale(.75);left:-2px;color:#4a89dc}.bar{position:relative}.bar:after,.bar:before{content:'';height:2px;width:0;bottom:1px;position:absolute;background:#4a89dc;transition:all .2s ease}.bar:before{left:50%}.highlight,.ripples{left:0;position:absolute}.bar:after{right:50%}input:focus~.bar:after,input:focus~.bar:before{width:50%}.highlight{height:60%;width:100px;top:25%;opacity:.5}input:focus~.highlight{animation:inputHighlighter .3s ease}@keyframes inputHighlighter{from{background:#4a89dc}to{width:0;background:0 0}}.buttonRounded{border-radius:25px;width:100%;text-transform:none;margin-bottom:20px}.buttonBlue{background:#3fd0ae;text-shadow:1px 1px 0 rgba(65,172,147,.5)}.buttonBlue:hover{background:#41ac93}.ripples{top:0;width:100%;height:100%;overflow:hidden;background:0 0}.ripplesCircle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25)}.ripples.is-active .ripplesCircle{animation:ripples .4s ease-in}@keyframes ripples{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}md-card.scan img{width:226px;height:186px;align-self:center;margin-bottom:15px}\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ScanCmp);
    return ScanCmp;
})();
exports.ScanCmp = ScanCmp;
