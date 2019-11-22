import { Component, OnInit } from '@angular/core';
import { NoteServices } from '../../services/note.services';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    note = { id: null, title: null, description: null };

    constructor(private navController: NavController, private route: ActivatedRoute, private noteServices: NoteServices) {
        this.route.paramMap.subscribe((params) => {
            if (params.get('id') != '') {
                noteServices.get(params.get('id')).subscribe((value) => {
                    this.note = <{ id: any, title: any, description: any }> value;
                });
            }
        })
    }

    ngOnInit() {
    }

    saveNote() {
        if (this.note.id == null) {
            this.note.id = Date.now();
            this.noteServices.create(this.note);
        } else {
            this.noteServices.update(this.note);
        }
        this.navController.navigateBack('/');
    }

    deleteNote() {
        this.noteServices.delete(this.note);
        this.navController.navigateBack('/');
    }

}
