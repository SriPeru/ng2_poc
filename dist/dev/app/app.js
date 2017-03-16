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
            styles: ["\n    body{background: #e4ecf6}\n    md-content{background: transparent}\n\n    md-toolbar:not(.md-menu-toolbar) {\n        background-color: #3a556f;\n    }\n  "],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsiQXBwQ21wIiwiQXBwQ21wLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBbUQsZUFBZSxDQUFDLENBQUE7QUFDbkUsdUJBQXFGLGlCQUFpQixDQUFDLENBQUE7QUFFdkcsb0JBQWtDLGtCQUFrQixDQUFDLENBQUE7QUFFckQscUJBQXNCLGNBQWMsQ0FBQyxDQUFBO0FBQ3JDLHNCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hDLHNCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hDLHdCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLHVCQUF3QixrQkFBa0IsQ0FBQyxDQUFBO0FBRTNDLHFCQUFzQixjQUFjLENBQUMsQ0FBQTtBQUNyQywwQkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCxvQ0FBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUcvRDtJQUFBQTtJQTBDQUMsQ0FBQ0E7SUExQ0REO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxhQUFhQSxFQUFFQSxDQUFDQSxtQ0FBYUEsQ0FBQ0E7WUFDOUJBLFFBQVFBLEVBQUVBLDR4QkFpQlRBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLG1LQU9SQSxDQUFDQTtZQUNGQSxhQUFhQSxFQUFFQSx3QkFBaUJBLENBQUNBLElBQUlBO1lBQ3JDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLHlCQUFtQkEsQ0FBQ0E7U0FDckRBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxjQUFPQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsZ0JBQVFBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ3BEQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxjQUFPQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUM3Q0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsb0JBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO1lBQzFEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxnQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDcERBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLGtCQUFTQSxFQUFFQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQTtZQUN2REEsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBRUEsU0FBU0EsRUFBRUEsd0JBQVlBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBO1NBQ2pFQSxDQUFDQTs7ZUFFREE7SUFBREEsYUFBQ0E7QUFBREEsQ0ExQ0EsQUEwQ0NBLElBQUE7QUFEWSxjQUFNLFNBQ2xCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciwgUm91dGVDb25maWcsIFJvdXRlUGFyYW1zLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcblxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHtMb2dpbkNtcH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHtBYm91dENtcH0gZnJvbSAnLi4vYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtTdXBwb3J0Q21wfSBmcm9tICcuLi9zdXBwb3J0L3N1cHBvcnQnO1xuaW1wb3J0IHtDcmVhdGVDbXB9IGZyb20gJy4uL2NyZWF0ZS9jcmVhdGUnO1xuXG5pbXBvcnQge1NjYW5DbXB9IGZyb20gJy4uL3NjYW4vc2Nhbic7XG5pbXBvcnQge0Rhc2hib2FyZENtcH0gZnJvbSAnLi4vZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5pbXBvcnQge0Rhc2hib2FyZExpc3R9IGZyb20gJy4uL2Rhc2hib2FyZC9hcHBsaWNhdGlvbl9zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB2aWV3UHJvdmlkZXJzOiBbRGFzaGJvYXJkTGlzdF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYXRlcmlhbC1hcHAtY29udGVudFwiPlxuICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJtZC13aGl0ZWZyYW1lLXoxXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiIFtuZ1N0eWxlXT1cInN0eWxcIj5cbiAgICAgICAgPG5hdiBjbGFzcz1cIm1kLXRvb2xiYXItdG9vbHNcIj5cbiAgICAgICAgICA8YnV0dG9uIG1kLWJ1dHRvbiBhbHQ9XCJIb21lXCIgY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIFtyb3V0ZXJMaW5rXT1cIlsnL1NjYW4nXVwiPjxpIGNsYXNzPVwibG9nby1oYW5kXCIgPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICA8aDEgZmxleD48c3Ryb25nPkFwcDwvc3Ryb25nPlNjb3JlPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG1kLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy9Mb2dpbiddXCI+bG9naW48L2J1dHRvbj4gXG4gICAgICAgICAgICA8YnV0dG9uIG1kLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy9BYm91dCddXCI+QWJvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gbWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL1N1cHBvcnQnXVwiPlN1cHBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L21kLXRvb2xiYXI+XG5cbiAgICAgIDxtZC1jb250ZW50IGxheW91dC1wYWRkaW5nIGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgPC9tZC1jb250ZW50PlxuXG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgYm9keXtiYWNrZ3JvdW5kOiAjZTRlY2Y2fVxuICAgIG1kLWNvbnRlbnR7YmFja2dyb3VuZDogdHJhbnNwYXJlbnR9XG5cbiAgICBtZC10b29sYmFyOm5vdCgubWQtbWVudS10b29sYmFyKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTU1NmY7XG4gICAgfVxuICBgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy9Ib21lJywgY29tcG9uZW50OiBIb21lQ21wLCBhczogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9Mb2dpbicsIGNvbXBvbmVudDogTG9naW5DbXAsIGFzOiAnTG9naW4nIH0sXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNjYW5DbXAsIGFzOiAnU2NhbicgfSxcbiAgeyBwYXRoOiAnL1N1cHBvcnQnLCBjb21wb25lbnQ6IFN1cHBvcnRDbXAsIGFzOiAnU3VwcG9ydCcgfSxcbiAgeyBwYXRoOiAnL0Fib3V0JywgY29tcG9uZW50OiBBYm91dENtcCwgYXM6ICdBYm91dCcgfSxcbiAgeyBwYXRoOiAnL0NyZWF0ZScsIGNvbXBvbmVudDogQ3JlYXRlQ21wLCBhczogJ0NyZWF0ZScgfSxcbiAgeyBwYXRoOiAnL0Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ21wLCBhczogJ0Rhc2hib2FyZCcgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDbXAge1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=