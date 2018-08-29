import { Component, ViewChild } from "@angular/core";
import {
    IgxExpansionPanelComponent
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-3",
    styleUrls: ["./expansion-sample-3.component.scss"],
    templateUrl: "./expansion-sample-3.component.html"
})
export class ExpansionPanelSample3Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent })
    public panel: IgxExpansionPanelComponent;
    public readMore = "https://en.wikipedia.org/wiki/Hummingbird";
    // tslint:disable-next-line:max-line-length
    public imgSource = "https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg";
    public handleExpansion(evt?: {event: Event}) {
        console.log("Expanded event thrown ", (evt ? "with event: " + evt.event : "with no event"));
    }

    public handleCollapse(evt?: {event: Event}) {
        console.log("Collapsed event thrown ", (evt ? "with event: " + evt.event : "with no event"));
    }
}
