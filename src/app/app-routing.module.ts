import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './subcontractor/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MediaComponent } from './components/media/media.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FileComponent } from './components/file/file.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';
import { CrudComponent } from './components/crud/crud.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IconsComponent } from './components/icons/icons.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
import { UserProfileDetailComponent } from './subcontractor/profile/user-profile-detail';
import { JobsListComponent } from './subcontractor/jobs/jobs-list.component';
import { JobsDetailComponent } from './subcontractor/jobsdetail/jobs-detail.component';
import { InvoiceComponent } from './subcontractor/invoice/invoice.component';
import { PostjobComponent } from './staff/postjob/postjob.component';
import { SubcontractorsComponent } from './staff/subcontractors/subcontractors.component';
import { StaffSettingComponent } from './staff/staff-setting/staff-setting.component';
import { BankAccountComponent } from './subcontractor/bank-account/bank-account.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AdminSubcontractorsComponent } from './admin/admin-subcontractors/admin-subcontractors.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminStaffComponent } from './admin/admin-staff/admin-staff.component';
import { AdminBidsComponent } from './admin/admin-bids/admin-bids.component';
import { AdminBidDetailComponent } from './admin/admin-bids/admin-bid-detail/admin-bid-detail.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},

                    {path: 'admin-dashboard', component: AdminDashboardComponent},
                    {path: 'admin-posts', component: AdminPostsComponent},
                    {path: 'admin-profile', component: AdminProfileComponent},
                    {path: 'admin-settings', component: AdminSettingsComponent},
                    {path: 'admin-subcontractors', component: AdminSubcontractorsComponent},
                    {path: 'admin-staff', component: AdminStaffComponent},
                    {path: 'admin-bids', component: AdminBidsComponent},
                    {path: 'admin-bid-detail/:id', component: AdminBidDetailComponent},

                    {path: 'profile', component: UserProfileDetailComponent},
                    {path: 'jobslist', component: JobsListComponent},
                    {path: 'jobsdetail/:id', component: JobsDetailComponent},
                    {path: 'invoices', component: InvoiceComponent},
                    {path: 'invoice/:id', component: InvoiceComponent},
                    {path: 'bank-account', component: BankAccountComponent},

                    {path: 'postjob', component: PostjobComponent},
                    {path: 'subcontractors', component: SubcontractorsComponent},


                    {path: 'staff-setting', component: StaffSettingComponent},

                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/table', component: TableComponent},
                    {path: 'uikit/list', component: ListComponent},
                    {path: 'uikit/tree', component: TreeComponent},
                    {path: 'uikit/panel', component: PanelsComponent},
                    {path: 'uikit/overlay', component: OverlaysComponent},
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ],
            },
            {path:'pages/landing', component: LandingComponent},
            {path:'pages/login', component: LoginComponent},
            {path:'pages/signup', component: SignupComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
