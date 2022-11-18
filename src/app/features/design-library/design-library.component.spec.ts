import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignLibraryComponent } from './design-library.component';

describe('DesignLibraryComponent', () => {
  let component: DesignLibraryComponent;
  let fixture: ComponentFixture<DesignLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
