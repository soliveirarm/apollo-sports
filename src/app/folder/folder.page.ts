import {
  Component,
  inject,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  swiperSlideChanged(e: any) {
    console.log('changed', e);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://m.media-amazon.com/images/I/61qv35tohEL._AC_UF894,1000_QL80_.jpg',
    'https://imgnike-a.akamaihd.net/768x768/02612215.jpg',
    'https://imgcentauro-a.akamaihd.net/768x768/97359523.jpg',
    'https://imgnike-a.akamaihd.net/768x768/02685851.jpg',
  ];

  products = [
    {
      title: 'Bola de Vôlei Penalty 6.0 Pro',
      img: 'https://cambuci.vtexassets.com/arquivos/ids/999311-1200-auto?v=638355031247330000&width=1200&height=auto&aspect=true',
    },
    {
      title: 'Camisa Nike Paris Saint-Germain I 2023/24 Torcedor Pro Masculina',
      img: 'https://imgnike-a.akamaihd.net/768x768/02612215.jpg',
    },
    {
      title: 'Raquete de Tênis Wilson Impact L2 - Adulto',
      img: 'https://imgcentauro-a.akamaihd.net/768x768/97359523.jpg',
    },
    {
      title: 'Bola Nike Pitch Futebol',
      img: 'https://imgnike-a.akamaihd.net/768x768/02685851.jpg',
    },
  ];
}
