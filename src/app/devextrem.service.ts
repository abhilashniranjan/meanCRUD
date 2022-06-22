import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Injectable({
  providedIn: 'root'
})
export class DevextremService {

  constructor() { }

  getDataSource() {
    return new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request:any) {
          request.params.startDate = '2020-05-10';
          request.params.endDate = '2020-05-15';
        },
      },
    });
  }


}
