import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        NavigationComponent,
        SidebarComponent,
        BreadcrumbComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AdminAddComponent
    ]
})
export class AdminModule { }
