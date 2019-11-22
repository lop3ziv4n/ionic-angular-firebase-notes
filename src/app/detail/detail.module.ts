import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DetailPageRoutingModule} from './detail-routing.module';

import {DetailPage} from './detail.page';
import {NoteServices} from '../../services/note.services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailPageRoutingModule
    ],
    declarations: [DetailPage],
    providers: [NoteServices]
})
export class DetailPageModule {
}
