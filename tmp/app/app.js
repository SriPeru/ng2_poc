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
var all_1 = require('ng2-material/all');
var home_1 = require('../home/home');
var login_1 = require('../login/login');
var about_1 = require('../about/about');
var support_1 = require('../support/support');
var create_1 = require('../create/create');
var scan_1 = require('../scan/scan');
var dashboard_1 = require('../dashboard/dashboard');
var application_service_1 = require('../dashboard/application_service');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            viewProviders: [application_service_1.DashboardList],
            template: "\n    <section class=\"material-app-content\">\n      <md-toolbar class=\"md-whiteframe-z1\" style=\"display: block\" [ngStyle]=\"styl\">\n        <nav class=\"md-toolbar-tools\">\n          <button md-button alt=\"Home\" class=\"md-icon-button\" [routerLink]=\"['/Scan']\"><i class=\"logo-hand\" ></i></button>\n          <h1 flex><strong>App</strong>Score</h1>\n          <button md-button [routerLink]=\"['/Login']\">login</button> \n            <button md-button [routerLink]=\"['/About']\">About</button>\n            <button md-button [routerLink]=\"['/Support']\">Support</button>\n        </nav>\n      </md-toolbar>\n\n      <md-content layout-padding layout=\"column\" layout-align=\"center center\">\n        <router-outlet></router-outlet>\n      </md-content>\n\n    </section>\n  ",
            styles: ["\n    body{background:#e4ecf6}md-content{background:0 0}md-toolbar:not(.md-menu-toolbar){background-color:#3a556f}\n  "],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/Home', component: home_1.HomeCmp, as: 'Home' },
            { path: '/Login', component: login_1.LoginCmp, as: 'Login' },
            { path: '/', component: scan_1.ScanCmp, as: 'Scan' },
            { path: '/Support', component: support_1.SupportCmp, as: 'Support' },
            { path: '/About', component: about_1.AboutCmp, as: 'About' },
            { path: '/Create', component: create_1.CreateCmp, as: 'Create' },
            { path: '/Dashboard', component: dashboard_1.DashboardCmp, as: 'Dashboard' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
