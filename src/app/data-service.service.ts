import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';



export interface TestData {
  Message: string;
  
}

export interface SavingData {
'id':JSON,
  Radar1: JSON,
  PacketLoss1: JSON,
  Radar2: JSON,
  PacketLoss2: JSON
}

export interface requestData{
  startDate:string;
  endDate:string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  dataUrl = 'http://127.0.0.1:5000/send';
  requestUrl = 'http://127.0.0.1:5000/receive'
  loginUrl = 'http://127.0.0.1:5000/login'
  createMeasureUrl='http://127.0.0.1:5000/createMeasure'
  createMainMeasureUrl='http://127.0.0.1:5000/createMainMeasure'
  CollectionsUrl='http://127.0.0.1:5000/collectionsUrl'
  saveUrl='http://127.0.0.1:5000/save'
  historyUrl='http://127.0.0.1:5000/history'


  private subject = new Subject<any>();
  private subjectData = new Subject<any>();
  private subjectRadar = new Subject<any>();
  private subjectCollections = new Subject<any>();
  // private loggedIn=false;

  

    sendMessage(message: String) {
        this.subject.next({ text: message });
    }

    sendMessageCollections(message:Object){
      this.subjectCollections.next(message)
    }

    sendMessageData(obj:JSON){
      this.subjectData.next(obj);
    }

    sendMessageRadar(obj:JSON){
      this.subjectRadar.next(obj);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getMessageData(): Observable<any> {
      return this.subjectData.asObservable();
  }

  getMessageCollections(){
    return this.subjectCollections.asObservable();
  }

  getMessageRadar(): Observable<any> {
    return this.subjectRadar.asObservable();
}

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<TestData>(this.dataUrl);
  }

  getCollections(){
    this.http.get(this.CollectionsUrl).subscribe(data => {
      this.sendMessageCollections(data);
        });
  }

  sendRequestData (rd: requestData): Observable<any> {
    console.log(rd)
    var d = JSON.stringify(rd)
    var s =  this.http.post<any>(this.requestUrl, d,httpOptions).subscribe(r=>{});
    console.log(s)
    return 
  }


  login (lf: loginform): Observable<any> {
    var d = JSON.stringify(lf)
    this.http.post<any>(this.loginUrl, d,httpOptions).subscribe((r:String)=>{
    console.log(r);
    if(r=="Success"){
      window.localStorage.setItem("LoggedIn",JSON.stringify(true));
    }
    this.sendMessage(r);
    });
      return 
  }

  getHistory(){
    var r=this.http.get<string>(this.historyUrl);
    return r;
  }

  isLoggedIn(){
    return JSON.parse(window.localStorage.getItem("LoggedIn"));
  }

  logout(){
    window.localStorage.setItem("LoggedIn",JSON.stringify(false));
  }

  cereateMeasure(lf:createmeasure): Observable<any>{
    var d = JSON.stringify(lf)
    this.http.post<any>(this.createMeasureUrl, d,httpOptions).subscribe((r:string)=>{
      let obj = JSON.parse(r);
      // this.sendMessageData(obj.data);
      window.localStorage.setItem(obj.identifier,JSON.stringify(obj));
      this.PacketLoss = obj.packetloss;
      this.Radar = obj.stat;
      window.localStorage.setItem("Data",JSON.stringify(obj.data));
      window.localStorage.setItem(obj.stat.saveName, JSON.stringify(this.Radar));
      window.localStorage.setItem(obj.packetloss.saveName, JSON.stringify(this.PacketLoss));
  });
  return
}

cereateMainMeasure(lf:mainmeasure): Observable<any>{
  var d = JSON.stringify(lf)
  this.http.post<any>(this.createMainMeasureUrl, d,httpOptions).subscribe((r)=>{
    console.log(r)
    window.localStorage.setItem("main-measure", JSON.stringify(r));
});
return
}

PacketLoss:Object;
Radar:Object;

getRadar(name){
  if(name=="1/stat"){
    console.log(JSON.parse(window.localStorage.getItem("1/stat")));
    return JSON.parse(window.localStorage.getItem("1/stat"));
  }
  if(name=="2/stat"){
    return JSON.parse(window.localStorage.getItem("2/stat"));
  }
  if(name=="3/stat"){
    return JSON.parse(window.localStorage.getItem("3/stat"));
  }
}

getPacketLoss(name){
  if(name==="1"){
    console.log(JSON.parse(window.localStorage.getItem("1/loss")));
    return JSON.parse(window.localStorage.getItem("1/loss"));
  }else{
    console.log(JSON.parse(window.localStorage.getItem("2/loss")));
    return JSON.parse(window.localStorage.getItem("2/loss"));
  }
}

getLineGraphData(name){
  if(name=="Data"){
    return JSON.parse(window.localStorage.getItem("Data"));
  }else{
    return JSON.parse(window.localStorage.getItem("2/DataLineChart"));
  }
}


saveMeasure(){
  var id:JSON = JSON.parse(window.localStorage.getItem("1Data"));
  var id:JSON = id['id'];
  var Radar1 :JSON =JSON.parse(window.localStorage.getItem("1/stat"));
  var Radar2 : JSON = JSON.parse(window.localStorage.getItem("2/stat"));
  var PacketLoss1:JSON = JSON.parse(window.localStorage.getItem("1/loss"));
  var PacketLoss2:JSON=JSON.parse(window.localStorage.getItem("2/loss"));
  var SavingData ={
    'id':id,
    Radar1:Radar1 ,
    PacketLoss1: PacketLoss1,
    Radar2: Radar2,
    PacketLoss2: PacketLoss2

  }
  console.log(SavingData);
  this.http.post<any>(this.saveUrl,SavingData,httpOptions).subscribe((r:String)=>{
    });
}

populate(i){
  console.log(i['PacketLoss1']);
  console.log(i['PacketLoss2']);
  console.log(i['Radar1']);
  console.log(i['Radar2']);

  window.localStorage.setItem(i['PacketLoss1']['saveName'], JSON.stringify(i['PacketLoss1']));
  window.localStorage.setItem(i['PacketLoss2']['saveName'], JSON.stringify(i['PacketLoss2']));
  window.localStorage.setItem(i['Radar1']['saveName'], JSON.stringify(i['Radar1']));
  window.localStorage.setItem(i['Radar2']['saveName'], JSON.stringify(i['Radar2']));
}

getTableData(number){
  if(number=="1"){
    var data1:JSON = JSON.parse(window.localStorage.getItem("1Data"));
    data1 = data1['data'];
    return data1;
  }
  if(number=="2"){
    var data2:JSON = JSON.parse(window.localStorage.getItem("2Data"));
    data2=data2['data'];
    return data2;
  }
}

mainMeasureData(){
  var res:JSON=JSON.parse(window.localStorage.getItem("main-measure"));
  return res;
}


  

  
}
