import {Component, OnInit} from '@angular/core';
import {NoteServices} from '../../services/note.services';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    note = {id: null, title: null, description: null};

    constructor(private route: ActivatedRoute, private noteServices: NoteServices) {
        const noteId = this.route.snapshot.paramMap.get('id');
        this.note = noteServices.get(Number(noteId));
    }

    ngOnInit() {
    }

}
