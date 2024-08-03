import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notesKey: string = "travelNotes";
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async getNotes() {
    return this._storage?.get(this.notesKey) || [];
  }

  async addNote(note: any) : Promise<any> {
    const notes = await this.getNotes();
    notes.push(note);
    return this._storage?.set(this.notesKey, notes);
  }

  async updateNote(notes: any[]) : Promise<any> {
    return this._storage?.set(this.notesKey, notes)
  }
}
