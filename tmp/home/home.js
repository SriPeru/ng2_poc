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
var HomeCmp = (function () {
    function HomeCmp() {
    }
    HomeCmp = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <md-card layout-margin>\n      <md-card-title>\n        <md-card-title-text>\n          <span class=\"md-headline\">AppScore</span>\n        </md-card-title-text>\n      </md-card-title>\n      <md-card-content>\n        <p>\n          Leverage agile frameworks to provide a robust synopsis for high level overviews.\n        </p>\n\n      </md-card-content>\n    </md-card>\n  ",
            styles: ["\n\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;
