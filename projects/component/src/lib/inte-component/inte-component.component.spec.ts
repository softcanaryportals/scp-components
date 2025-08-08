import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteComponentComponent } from './inte-component.component';

describe('InteComponentComponent', () => {
  let component: InteComponentComponent;
  let fixture: ComponentFixture<InteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
