import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductNewComponent } from './product-new.component';



describe('NewComponent', () => {
  let component: ProductNewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
