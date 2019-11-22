import {Component} from '@angular/core';
import {NoteServices} from '../../services/note.services';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    notes = [];

    constructor(notesServices: NoteServices, public navController: NavController) {
        this.notes = notesServices.getAll();
    }

    goToDetail(id: number) {
        this.navController.navigateForward(`/detail/${id}`);
    }

}
