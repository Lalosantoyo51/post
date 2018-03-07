"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// >> app-settings-code
var application_settings_1 = require("application-settings");
// << app-settings-code
var AplicationComponent = /** @class */ (function () {
    function AplicationComponent() {
        // >> app-settings-bool-code
        application_settings_1.setBoolean("isTurnedOn", true);
        this.isTurnedOn = application_settings_1.getBoolean("isTurnedOn", true);
        application_settings_1.setBoolean("mostrar", true);
        this.mostrar = application_settings_1.getBoolean("", false);
        // << app-settings-bool-code
        // >> app-settings-string-code
        application_settings_1.setString("username", "Wolfgang");
        this.username = application_settings_1.getString("username");
        // << app-settings-string-code
        // >> app-settings-number-code
        application_settings_1.setNumber("locationX", 54.321);
        this.locationX = parseFloat(application_settings_1.getNumber("locationX").toFixed(3));
        // << app-settings-number-code
        // >> app-settings-default-value-code
        // will return "No string value" if there is no value for "noSuchKey"
        this.someKey = application_settings_1.getString("noSuchKey", "No string value");
        // << app-settings-default-value-code
        // >> app-settings-no-value-code
        // will return undefined if there is no value for "noSuchKey"
        var defaultValue = application_settings_1.getString("noSuchKey");
        console.log(defaultValue);
        // << app-settings-no-value-code
        // >> app-settings-no-key-code
        // will return false if there is no value for "noBoolKey"
        this.noBoolKey = application_settings_1.hasKey("noBoolKey");
        // << app-settings-no-key-code
    }
    AplicationComponent.prototype.onSetSettings = function () {
        application_settings_1.setBoolean("isTurnedOn", true);
        this.isTurnedOn = application_settings_1.getBoolean("isTurnedOn");
        application_settings_1.setBoolean("mostrar", true);
        this.mostrar = application_settings_1.getBoolean("mostrar");
        application_settings_1.setString("username", "Wolfgang");
        this.username = application_settings_1.getString("username");
        application_settings_1.setNumber("locationX", 54.321);
        this.locationX = parseFloat(application_settings_1.getNumber("locationX").toFixed(2));
        application_settings_1.setString("noSuchKey", "New Value!");
        this.someKey = application_settings_1.getString("noSuchKey", "No string value");
        application_settings_1.setBoolean("noBoolKey", true);
        this.noBoolKey = application_settings_1.hasKey("noBoolKey");
    };
    AplicationComponent.prototype.onClearSettings = function () {
        // >> app-settings-remove-key-code
        application_settings_1.remove("isTurnedOn");
        // << app-settings-remove-key-code
        // >> app-settings-remove-all-code
        application_settings_1.clear();
        // << app-settings-remove-all-code
        application_settings_1.setBoolean("isTurnedOn", false);
        this.isTurnedOn = application_settings_1.getBoolean("isTurnedOn", false);
        application_settings_1.setString("username", "Default name");
        this.username = application_settings_1.getString("username");
        application_settings_1.setNumber("locationX", 0.00);
        this.locationX = parseFloat(application_settings_1.getNumber("locationX").toFixed(2));
        this.someKey = application_settings_1.getString("noSuchKey", "No string value");
        this.noBoolKey = application_settings_1.hasKey("noBoolKey");
    };
    AplicationComponent = __decorate([
        core_1.Component({
            selector: "ng-aplication",
            moduleId: module.id,
            templateUrl: "./aplication.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AplicationComponent);
    return AplicationComponent;
}());
exports.AplicationComponent = AplicationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBsaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGxpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyx1QkFBdUI7QUFDdkIsNkRBVThCO0FBQzlCLHVCQUF1QjtBQU12QjtJQVFJO1FBQ0ksNEJBQTRCO1FBQzVCLGlDQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsaUNBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakQsaUNBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQ0FBVSxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQTtRQUNuQyw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLGdDQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0NBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0Qyw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLGdDQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLGdDQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxxRUFBcUU7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pELHFDQUFxQztRQUNyQyxnQ0FBZ0M7UUFDaEMsNkRBQTZEO1FBQzdELElBQUksWUFBWSxHQUFHLGdDQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixnQ0FBZ0M7UUFDaEMsOEJBQThCO1FBQzlCLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsOEJBQThCO0lBQ2xDLENBQUM7SUFFTSwyQ0FBYSxHQUFwQjtRQUNJLGlDQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsaUNBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxpQ0FBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLGlDQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckMsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLGdDQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLGdDQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRXpELGlDQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsNkJBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sNkNBQWUsR0FBdEI7UUFDSSxrQ0FBa0M7UUFDbEMsNkJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQixrQ0FBa0M7UUFDbEMsa0NBQWtDO1FBQ2xDLDRCQUFLLEVBQUUsQ0FBQztRQUNSLGtDQUFrQztRQUNsQyxpQ0FBVSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLGlDQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxELGdDQUFTLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0NBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxnQ0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxnQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxPQUFPLEdBQUcsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTVFUSxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7O09BQ1csbUJBQW1CLENBNkUvQjtJQUFELDBCQUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vID4+IGFwcC1zZXR0aW5ncy1jb2RlXG5pbXBvcnQge1xuICAgIGdldEJvb2xlYW4sXG4gICAgc2V0Qm9vbGVhbixcbiAgICBnZXROdW1iZXIsXG4gICAgc2V0TnVtYmVyLFxuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmcsXG4gICAgaGFzS2V5LFxuICAgIHJlbW92ZSxcbiAgICBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbi8vIDw8IGFwcC1zZXR0aW5ncy1jb2RlXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJuZy1hcGxpY2F0aW9uXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwbGljYXRpb24uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcGxpY2F0aW9uQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgaXNUdXJuZWRPbjogYm9vbGVhbjtcbiAgICBwdWJsaWMgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbG9jYXRpb25YOiBudW1iZXI7XG4gICAgcHVibGljIHNvbWVLZXk6IHN0cmluZztcbiAgICBwdWJsaWMgbm9Cb29sS2V5OiBib29sZWFuO1xuICAgIHB1YmxpYyBtb3N0cmFyOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vID4+IGFwcC1zZXR0aW5ncy1ib29sLWNvZGVcbiAgICAgICAgc2V0Qm9vbGVhbihcImlzVHVybmVkT25cIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuaXNUdXJuZWRPbiA9IGdldEJvb2xlYW4oXCJpc1R1cm5lZE9uXCIsIHRydWUpO1xuXG4gICAgICAgIHNldEJvb2xlYW4oXCJtb3N0cmFyXCIsIHRydWUpO1xuICAgICAgICB0aGlzLm1vc3RyYXIgPSBnZXRCb29sZWFuKFwiXCIsZmFsc2UpXG4gICAgICAgIC8vIDw8IGFwcC1zZXR0aW5ncy1ib29sLWNvZGVcbiAgICAgICAgLy8gPj4gYXBwLXNldHRpbmdzLXN0cmluZy1jb2RlXG4gICAgICAgIHNldFN0cmluZyhcInVzZXJuYW1lXCIsIFwiV29sZmdhbmdcIik7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBnZXRTdHJpbmcoXCJ1c2VybmFtZVwiKTtcbiAgICAgICAgLy8gPDwgYXBwLXNldHRpbmdzLXN0cmluZy1jb2RlXG4gICAgICAgIC8vID4+IGFwcC1zZXR0aW5ncy1udW1iZXItY29kZVxuICAgICAgICBzZXROdW1iZXIoXCJsb2NhdGlvblhcIiwgNTQuMzIxKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvblggPSBwYXJzZUZsb2F0KGdldE51bWJlcihcImxvY2F0aW9uWFwiKS50b0ZpeGVkKDMpKTtcbiAgICAgICAgLy8gPDwgYXBwLXNldHRpbmdzLW51bWJlci1jb2RlXG4gICAgICAgIC8vID4+IGFwcC1zZXR0aW5ncy1kZWZhdWx0LXZhbHVlLWNvZGVcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gXCJObyBzdHJpbmcgdmFsdWVcIiBpZiB0aGVyZSBpcyBubyB2YWx1ZSBmb3IgXCJub1N1Y2hLZXlcIlxuICAgICAgICB0aGlzLnNvbWVLZXkgPSBnZXRTdHJpbmcoXCJub1N1Y2hLZXlcIiwgXCJObyBzdHJpbmcgdmFsdWVcIik7XG4gICAgICAgIC8vIDw8IGFwcC1zZXR0aW5ncy1kZWZhdWx0LXZhbHVlLWNvZGVcbiAgICAgICAgLy8gPj4gYXBwLXNldHRpbmdzLW5vLXZhbHVlLWNvZGVcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHZhbHVlIGZvciBcIm5vU3VjaEtleVwiXG4gICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSBnZXRTdHJpbmcoXCJub1N1Y2hLZXlcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIC8vIDw8IGFwcC1zZXR0aW5ncy1uby12YWx1ZS1jb2RlXG4gICAgICAgIC8vID4+IGFwcC1zZXR0aW5ncy1uby1rZXktY29kZVxuICAgICAgICAvLyB3aWxsIHJldHVybiBmYWxzZSBpZiB0aGVyZSBpcyBubyB2YWx1ZSBmb3IgXCJub0Jvb2xLZXlcIlxuICAgICAgICB0aGlzLm5vQm9vbEtleSA9IGhhc0tleShcIm5vQm9vbEtleVwiKTtcbiAgICAgICAgLy8gPDwgYXBwLXNldHRpbmdzLW5vLWtleS1jb2RlXG4gICAgfVxuXG4gICAgcHVibGljIG9uU2V0U2V0dGluZ3MoKSB7XG4gICAgICAgIHNldEJvb2xlYW4oXCJpc1R1cm5lZE9uXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmlzVHVybmVkT24gPSBnZXRCb29sZWFuKFwiaXNUdXJuZWRPblwiKTtcbiAgICAgICAgc2V0Qm9vbGVhbihcIm1vc3RyYXJcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubW9zdHJhciA9IGdldEJvb2xlYW4oXCJtb3N0cmFyXCIpO1xuXG4gICAgICAgIHNldFN0cmluZyhcInVzZXJuYW1lXCIsIFwiV29sZmdhbmdcIik7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBnZXRTdHJpbmcoXCJ1c2VybmFtZVwiKTtcblxuICAgICAgICBzZXROdW1iZXIoXCJsb2NhdGlvblhcIiwgNTQuMzIxKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvblggPSBwYXJzZUZsb2F0KGdldE51bWJlcihcImxvY2F0aW9uWFwiKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICBzZXRTdHJpbmcoXCJub1N1Y2hLZXlcIiwgXCJOZXcgVmFsdWUhXCIpO1xuICAgICAgICB0aGlzLnNvbWVLZXkgPSBnZXRTdHJpbmcoXCJub1N1Y2hLZXlcIiwgXCJObyBzdHJpbmcgdmFsdWVcIik7XG5cbiAgICAgICAgc2V0Qm9vbGVhbihcIm5vQm9vbEtleVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5ub0Jvb2xLZXkgPSBoYXNLZXkoXCJub0Jvb2xLZXlcIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXJTZXR0aW5ncygpIHtcbiAgICAgICAgLy8gPj4gYXBwLXNldHRpbmdzLXJlbW92ZS1rZXktY29kZVxuICAgICAgICByZW1vdmUoXCJpc1R1cm5lZE9uXCIpO1xuICAgICAgICAvLyA8PCBhcHAtc2V0dGluZ3MtcmVtb3ZlLWtleS1jb2RlXG4gICAgICAgIC8vID4+IGFwcC1zZXR0aW5ncy1yZW1vdmUtYWxsLWNvZGVcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgLy8gPDwgYXBwLXNldHRpbmdzLXJlbW92ZS1hbGwtY29kZVxuICAgICAgICBzZXRCb29sZWFuKFwiaXNUdXJuZWRPblwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaXNUdXJuZWRPbiA9IGdldEJvb2xlYW4oXCJpc1R1cm5lZE9uXCIsIGZhbHNlKTtcblxuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBcIkRlZmF1bHQgbmFtZVwiKTtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGdldFN0cmluZyhcInVzZXJuYW1lXCIpO1xuXG4gICAgICAgIHNldE51bWJlcihcImxvY2F0aW9uWFwiLCAwLjAwKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvblggPSBwYXJzZUZsb2F0KGdldE51bWJlcihcImxvY2F0aW9uWFwiKS50b0ZpeGVkKDIpKTtcblxuICAgICAgICB0aGlzLnNvbWVLZXkgPSBnZXRTdHJpbmcoXCJub1N1Y2hLZXlcIiwgXCJObyBzdHJpbmcgdmFsdWVcIik7XG4gICAgICAgIHRoaXMubm9Cb29sS2V5ID0gaGFzS2V5KFwibm9Cb29sS2V5XCIpO1xuICAgIH1cbn0iXX0=