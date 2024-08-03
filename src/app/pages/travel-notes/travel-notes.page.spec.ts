import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelNotesPage } from './travel-notes.page';

describe('TravelNotesPage', () => {
  let component: TravelNotesPage;
  let fixture: ComponentFixture<TravelNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
