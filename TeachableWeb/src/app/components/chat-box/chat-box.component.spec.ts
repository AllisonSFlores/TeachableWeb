import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatBoxComponent } from './chat-box.component';
import { ChatBoxComponentS } from './chat-box.componentS';

describe('ChatBoxComponent', () => {
  let component: ChatBoxComponent;
  let fixture: ComponentFixture<ChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('ChatBoxComponentS', () => {
  let component: ChatBoxComponentS;
  let fixture: ComponentFixture<ChatBoxComponentS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoxComponentS ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxComponentS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});