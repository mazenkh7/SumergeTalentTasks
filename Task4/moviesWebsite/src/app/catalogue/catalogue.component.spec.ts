import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '../services/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CatalogueComponent } from './catalogue.component';
import { CatalogueService } from '../services/catalogue.service';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogueComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginService, CatalogueService,]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
