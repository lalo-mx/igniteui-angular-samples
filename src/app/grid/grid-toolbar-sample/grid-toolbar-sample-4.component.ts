import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent} from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-4",
  styleUrls: ["./grid-toolbar-sample-4.component.scss"],
  templateUrl: "./grid-toolbar-sample-4.component.html"
})
export class GridToolbarSample4Component implements OnInit {

    @ViewChild("grid1") public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }

}
