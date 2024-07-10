import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertisseurListPage } from './convertisseur-list.page';

describe('ConvertisseurListPage', () => {
  let component: ConvertisseurListPage;
  let fixture: ComponentFixture<ConvertisseurListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertisseurListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
