import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ComponentShareService {
  
  private readonly _titleValue$: Subject<string | null>;
  private readonly _countValue$: Subject<number>; 
  private readonly _valueCheck$: Subject<number>;

  constructor() {
    this._titleValue$ = new Subject<string | null>();
    this._countValue$ = new Subject<number>();
    this._valueCheck$ = new Subject<number>();
  }
  public get countValue() {
      return this._countValue$;
  }
  public setCountValue(number: number) {
    this._countValue$.next(number);
  }

  public get titleValue() {
    return this._titleValue$;
  }
  public setTitleValue(title: string | null) {
    console.log(title);
    this._titleValue$.next(title);
  }

  public get valueCheck() {
    return this._valueCheck$;
  }
  public setValueChecked(numberCheck: number) {
    this._valueCheck$.next(numberCheck);
  }
}

 
 