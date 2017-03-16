var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_1 = require('./app/app');
var all_1 = require('ng2-material/all');
core_1.enableProdMode();
browser_1.bootstrap(app_1.AppCmp, [
    router_1.ROUTER_PROVIDERS, all_1.MATERIAL_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsd0JBQXdCLDJCQUEyQixDQUFDLENBQUE7QUFDcEQsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFDekYsb0JBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBQ2pDLG9CQUFpQyxrQkFBa0IsQ0FBQyxDQUFBO0FBRXBELHFCQUFjLEVBQUUsQ0FBQztBQUNqQixtQkFBUyxDQUFDLFlBQU0sRUFBRTtJQUNoQix5QkFBZ0IsRUFBRSx3QkFBa0I7SUFDcEMsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFFLENBQUM7Q0FDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvdmlkZSwgZW5hYmxlUHJvZE1vZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXBwQ21wfSBmcm9tICcuL2FwcC9hcHAnO1xuaW1wb3J0IHtNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuYm9vdHN0cmFwKEFwcENtcCwgW1xuICBST1VURVJfUFJPVklERVJTLCBNQVRFUklBTF9QUk9WSURFUlMsXG4gIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSlcbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9