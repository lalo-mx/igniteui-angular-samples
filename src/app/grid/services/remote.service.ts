import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private url: string = "https://www.igniteui.com/api/products";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, cb?: (any) => void): any {
        const dataState = data;
        return this.http
            .get(this.buildUrl(dataState))
            .subscribe((d: any) => {
                this._remoteData.next(d.Results);
                if (cb) {
                    cb(d);
                }
            });
    }

    private buildUrl(dataState: any): string {
        let qS: string = "?";
        let requiredChunkSize: number;
        if (dataState) {
            const skip = dataState.startIndex;

            requiredChunkSize = dataState.chunkSize === 0 ?
                // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
                10 : dataState.chunkSize;
            const top = requiredChunkSize;
            qS += `$skip=${skip}&$top=${top}&$count=true&$inlinecount=allpages`;
        }
        return `${this.url}${qS}`;
    }
}
