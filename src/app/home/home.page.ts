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

    constructor(private notesServices: NoteServices, private navController: NavController) {
        notesServices.getAll().subscribe((values) => {
            this.notes = values;
        });
    }

    goToDetail(id: number) {
        this.navController.navigateForward(`/detail/${id}`);
    }

    createNote() {
        this.navController.navigateForward(`/detail/`);
    }

}
