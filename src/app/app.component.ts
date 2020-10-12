import { Component } from '@angular/core';
import { CollectionService } from './shared/services/collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(private collections: CollectionService) {
    collections.parse(`
    {
      "general" : {
          "needAuth": true,
          "jsUrl": "http://192.168.70.11/commons/"
      },
      "documents": {
          "whitelist": {
              "Procurator1" : {
                  "jfif": "image/pjpeg,image/jpeg",
                  "jfif-tbnl": "image/jpeg",
                  "jpe": "image/pjpeg,image/jpeg",
                  "jpeg": "image/pjpeg,image/jpeg",
                  "jpg": "image/pjpeg,image/jpeg",
                  "jps": "image/x-jps",
                  "pgm": "image/x-portable-graymap,image/x-portable-greymap",
                  "pic": "image/pict",
                  "pict": "image/pict",
                  "png": "image/png",
                  "tif": "image/tiff,image/x-tiff",
                  "tiff": "image/tiff,image/x-tiff",
                  "bm": "image/bmp",
                  "bmp": "image/bmp,image/x-windows-bmp"
              },
              "Soat1" : {
                  "jfif": "image/pjpeg,image/jpeg",
                  "jfif-tbnl": "image/jpeg",
                  "jpe": "image/pjpeg,image/jpeg",
                  "jpeg": "image/pjpeg,image/jpeg",
                  "jpg": "image/pjpeg,image/jpeg",
                  "jps": "image/x-jps",
                  "pgm": "image/x-portable-graymap,image/x-portable-greymap",
                  "pic": "image/pict",
                  "pict": "image/pict",
                  "png": "image/png",
                  "tif": "image/tiff,image/x-tiff",
                  "tiff": "image/tiff,image/x-tiff",
                  "bm": "image/bmp",
                  "bmp": "image/bmp,image/x-windows-bmp",
                  "pdf": "application/pdf",
                  "doc": "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  "xls": "application/excel,application/vnd.ms-excel,application/x-excel,application/x-msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  "docx": "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  "xlsx": "application/excel,application/vnd.ms-excel,application/x-excel,application/x-msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              },
              "DocSign" : {
                  "pdf": "application/pdf"
              },
               "OnlyImages" : {
                  "jfif": "image/pjpeg,image/jpeg",
                  "jfif-tbnl": "image/jpeg",
                  "jpe": "image/pjpeg,image/jpeg",
                  "jpeg": "image/pjpeg,image/jpeg",
                  "jpg": "image/pjpeg,image/jpeg",
                  "jps": "image/x-jps",
                  "pgm": "image/x-portable-graymap,image/x-portable-greymap",
                  "pic": "image/pict",
                  "pict": "image/pict",
                  "png": "image/png",
                  "tif": "image/tiff,image/x-tiff",
                  "tiff": "image/tiff,image/x-tiff",
                  "bm": "image/bmp",
                  "bmp": "image/bmp,image/x-windows-bmp",
                  "pdf": "application/pdf",
                  "doc": "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  "docx": "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              }
          },
          "storePath": "C:\\\\App",
          "preserveExt": true,
          "acceptNullWhiteList": false,
          "thumbnail": {
              "maxWidth": 256, 
              "maxHeight": 256,
              "storePath": "C:\\\\App"
          }
      }
  }
  
    `);
  }
}
