"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JunkHauler = exports.CopAttractor = exports.GroceryGetter = exports.Vehicle = exports.VehicleType = exports.VehicleColor = void 0;
const crypto = require("crypto");
var VehicleColor;
(function (VehicleColor) {
    VehicleColor[VehicleColor["Red"] = 0] = "Red";
    VehicleColor[VehicleColor["Blue"] = 1] = "Blue";
    VehicleColor[VehicleColor["Green"] = 2] = "Green";
    VehicleColor[VehicleColor["Black"] = 3] = "Black";
})(VehicleColor = exports.VehicleColor || (exports.VehicleColor = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Passenger"] = 0] = "Passenger";
    VehicleType[VehicleType["Commercial"] = 1] = "Commercial";
})(VehicleType = exports.VehicleType || (exports.VehicleType = {}));
class Vehicle {
    vehicle_id;
    color;
    static generate_id() { return crypto.randomBytes(12).toString('hex'); }
    constructor(color) {
        this.vehicle_id = Vehicle.generate_id();
        this.color = color;
    }
}
exports.Vehicle = Vehicle;
class GroceryGetter extends Vehicle {
    miles_per_hour = 90;
    miles_per_gallon = 40;
    type = VehicleType.Passenger;
    name = GroceryGetter.name;
    drive() { return 'Slowly cruising to the store 🚙'; }
}
exports.GroceryGetter = GroceryGetter;
class CopAttractor extends Vehicle {
    miles_per_hour = 180;
    miles_per_gallon = 20;
    type = VehicleType.Passenger;
    name = CopAttractor.name;
    drive() { return 'Burning rubber down the highway 🏎'; }
}
exports.CopAttractor = CopAttractor;
class JunkHauler extends Vehicle {
    miles_per_hour = 60;
    miles_per_gallon = 10;
    type = VehicleType.Commercial;
    name = JunkHauler.name;
    drive() { return 'Off to pull CopAttractor from the ditch again 🚛'; }
}
exports.JunkHauler = JunkHauler;
//# sourceMappingURL=vehicles.js.map