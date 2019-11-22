import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class NoteServices {

    constructor(private afDB: AngularFireDatabase) {
    }

    /* notes = [
        { id: 1, title: 'Note 1', description: 'Description note 1' },
        { id: 2, title: 'Note 2', description: 'Description note 2' },
        { id: 3, title: 'Note 3', description: 'Description note 3' },
        { id: 4, title: 'Note 4', description: 'Description note 4' }
    ]; */

    public getAll() {
        // return this.notes;
        return this.afDB.list('notes/').valueChanges();
    }

    public get(id: any) {
        // return this.notes.find((value) => value.id === id);
        return this.afDB.object(`notes/${id}`).valueChanges();
    }

    public create(note: { id: any, title: any, description: any }) {
        // this.notes.push(note);
        this.afDB.database.ref(`notes/${note.id}`).set(note);
    }

    public update(note: { id: any, title: any, description: any }) {
        /* this.notes.filter((value) => value.id === note.id)
            .map((value) => {
                value.title = note.title;
                value.description = note.description;
            }); */
        this.afDB.database.ref(`notes/${note.id}`).set(note);
    }

    public delete(note: { id: any, title: any, description: any }) {
        /* this.notes.forEach((item, index) => {
            if (item.id === note.id) this.notes.splice(index, 1);
        }); */
        this.afDB.database.ref(`notes/${note.id}`).remove();
    }

}
