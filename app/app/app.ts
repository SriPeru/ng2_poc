import {Component, ViewEncapsulation, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteConfig, RouteParams, ROUTER_PROVIDERS } from 'angular2/router';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {HomeCmp} from '../home/home';
import {LoginCmp} from '../login/login';
import {AboutCmp} from '../about/about';
import {SupportCmp} from '../support/support';
import {CreateCmp} from '../create/create';

import {ScanCmp} from '../scan/scan';
import {DashboardCmp} from '../dashboard/dashboard';
import {DashboardList} from '../dashboard/application_service';


@Component({
  selector: 'app',
  viewProviders: [DashboardList],
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
@RouteConfig([
  { path: '/Home', component: HomeCmp, as: 'Home' },
  { path: '/Login', component: LoginCmp, as: 'Login' },
  { path: '/', component: ScanCmp, as: 'Scan' },
  { path: '/Support', component: SupportCmp, as: 'Support' },
  { path: '/About', component: AboutCmp, as: 'About' },
  { path: '/Create', component: CreateCmp, as: 'Create' },
  { path: '/Dashboard', component: DashboardCmp, as: 'Dashboard' }
])
export class AppCmp {
}

