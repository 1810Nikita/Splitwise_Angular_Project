import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupRoutingModule } from './group-routing.module';
import { AddGroupComponent } from './add-group/add-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AddGroupComponent,
    GroupListComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    NgbTypeahead
  ]
})
export class GroupModule { }
