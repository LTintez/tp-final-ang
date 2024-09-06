import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAddPageComponent } from './heroes-add-page.component';

describe('HeroesAddPageComponent', () => {
  let component: HeroesAddPageComponent;
  let fixture: ComponentFixture<HeroesAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
