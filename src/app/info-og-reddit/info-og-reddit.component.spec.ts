import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOgRedditComponent } from './info-og-reddit.component';

describe('InfoOgRedditComponent', () => {
  let component: InfoOgRedditComponent;
  let fixture: ComponentFixture<InfoOgRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOgRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOgRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
