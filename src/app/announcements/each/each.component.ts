import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-each',
  templateUrl: './each.component.html',
  styleUrls: ['./each.component.css']
})
export class EachComponent {
  dataService = DataService;
  centered = false;
  disabled = false;
  unbounded = false;
  color = "rgba(114, 114, 114, 0.495)";
  id = this.dataService.sharedData;
  //announces ma pobierać z bazy
  announces = [
    {id: 0, title: 'Lorem Ipsum1', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus. Faucibus scelerisque eleifend donec pretium vulputate. Massa ultricies mi quis hendrerit dolor magna eget. Ut sem nulla pharetra diam sit amet nisl. Lacus sed viverra tellus in hac habitasse platea dictumst. Vel fringilla est ullamcorper eget. A lacus vestibulum sed arcu non odio euismod lacinia. Eget nunc scelerisque viverra mauris in. Est placerat in egestas erat imperdiet sed euismod. Integer enim neque volutpat ac. Laoreet non curabitur gravida arcu ac. Vivamus arcu felis bibendum ut tristique et. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae."},
    {id: 1, title: '2Lorem Ipsum', content: "feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id"}
  ]
}
