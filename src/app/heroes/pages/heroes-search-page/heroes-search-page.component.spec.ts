import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSearchPageComponent } from './heroes-search-page.component';

describe('HeroesSearchPageComponent', () => {
  let component: HeroesSearchPageComponent;
  let fixture: ComponentFixture<HeroesSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
