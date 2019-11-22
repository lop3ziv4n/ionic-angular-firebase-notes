import {Injectable} from '@angular/core';

@Injectable()
export class NoteServices {
    notes = [
        {id: 1, title: 'Note 1', description: 'Description note 1'},
        {id: 2, title: 'Note 2', description: 'Description note 2'},
        {id: 3, title: 'Note 3', description: 'Description note 3'},
        {id: 4, title: 'Note 4', description: 'Description note 4'}
    ];

    public getAll() {
        return this.notes;
    }

    public get(id: number) {
        return this.notes.find(note => note.id === id);
    }
}
