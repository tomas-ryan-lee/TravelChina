import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CulturalGuidePage } from './cultural-guide.page';

describe('CulturalGuidePage', () => {
  let component: CulturalGuidePage;
  let fixture: ComponentFixture<CulturalGuidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
