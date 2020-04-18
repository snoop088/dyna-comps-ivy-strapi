import { Component, OnInit, Input, ViewChild, ɵcreateInjector as createInjector,
  AfterViewInit, ComponentFactoryResolver, TemplateRef, ViewContainerRef, Injector } from '@angular/core';
import { DynNormalCompTypeComponent } from '../dyn-normal-comp-type/dyn-normal-comp-type.component';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { GetDataService } from '../get-data.service';
import { ApiLinkService } from 'src/app/shared/api-link.service';

export interface GitHubUser {
  login: string;
  id: number | string;
  html_url: string;
}
export interface Person {
  title: string;
  firstName: string;
  lastName: string;
  address: any;
  img: { name: string, url: string, size: string | number };
  email: string;
}

@Component({
  selector: 'dyn-comp-holder',
  templateUrl: './dyn-comp-holder.component.html',
  styleUrls: ['./dyn-comp-holder.component.css']
})
export class DynCompHolderComponent implements OnInit, AfterViewInit {

  @Input() externalHTML: string;
  @ViewChild('meTemplateMate', { read: ViewContainerRef }) myTemplateMate: ViewContainerRef;
  @ViewChild('meSourceMate') mySourceTemplate;

  public c = [];
  public users: Observable<GitHubUser[]> = null;
  public people: Observable<Person[]> = null;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private dataService: GetDataService,
    private apiLink: ApiLinkService<GitHubUser>,
    private peopleService: ApiLinkService<Person>
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

  }
  public getData(): Observable<any> {
    return this.dataService.getData();
  }

  public populateContent() {
    this.getData().pipe(
      map(item => 'this is name: ' + item.name)
    ).subscribe(result => {
      console.log(result);
    });
  }
  public generateComponent() {
    this.getData().subscribe(dataItem => {
      const cmpFactory = this.cfr.resolveComponentFactory(DynNormalCompTypeComponent);
      const cmpRef = this.myTemplateMate.createComponent(cmpFactory);
      const cmpInst: DynNormalCompTypeComponent = cmpRef.instance;
      cmpInst.template = this.mySourceTemplate;
      cmpInst.dataContext = dataItem;
    });
  }
  public createCarousel() {
    import('../carousel/carousel.module').then(({ CarouselModule }) => {
      const carouselModule = createInjector(CarouselModule, this.injector).get(CarouselModule);
      const factory = carouselModule.resolveCarouselComponentFactory();
      const compRef = this.myTemplateMate.createComponent(factory);
    });

  }
  public getUser(user: string) {
    this.apiLink.apiUrl = 'https://api.github.com/search/users?q=' + user;
    this.users = this.apiLink.getList('items').pipe(shareReplay(1));
  }
  public getPeople() {
    this.peopleService.apiUrl = 'http://dogg:1337/people';
    this.people = this.peopleService.getList().pipe(tap(r => console.log(r)), shareReplay(1));
  }

}
