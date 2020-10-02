import { Component, OnInit } from "@angular/core";

import { EquipmentItem } from "./equipment-item";
import { EquipmentService } from "./equipment.service";

@Component({
    selector: "app-equipment",
    templateUrl: "./equipment.component.html",
    providers: [EquipmentService],
    styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
    equipment: EquipmentItem[];

    constructor(private equipmentService: EquipmentService) {}

    ngOnInit() {
        this.getEquipment();
    }

    getEquipment(): void {
        this.equipmentService
            .getEquipment()
            .subscribe((equipment) => (this.equipment = equipment));
    }
}
