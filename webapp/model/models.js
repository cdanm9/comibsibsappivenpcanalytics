sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime info for the device the UI5 app is running on as JSONModel
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        createPropertyModel: function () {
			var oPropertyModel = {
				"iconTabFilterSelected": "Pending",
				"statusVisible": true,
				"tableTitle": "Orders",
				"fragDatePickerValue": new Date(),
				"servicePO": false,
				"editCheck": false,
				"btnEnable": false
			};
			var oModel = new JSONModel(oPropertyModel);
			return oModel;
		},

        createPropertyModelASN: function () {
			var oPropertyModelASN = {
				"mainTableCount": 0,
				"iconTabFilterSelected": "Open",
				"EditDeleteBtnVisible": false,
				"ChangeButtonVisible":false,
				"btnEnable": false
			};
			var oModel = new JSONModel(oPropertyModelASN);
			return oModel;
		},

		createPropertyModelSES: function () {
			var oPropertyModelSES = {
				"mainTableCount": 0,
				"iconTabFilterSelected": "Pending",
				"btnEnable": false
			};
			var oModel = new JSONModel(oPropertyModelSES);
			return oModel;
		},

		createPropertyModelInvCreation: function () {
            // debugger;
			var oPropertyModelInvCreation = {
				"iconTabFilterSelected": "Open",
				"statusVisible": true,
				"tableTitle": "Invoices",
				"fragDatePickerValue": new Date(),
				"servicePO": false,
				"editCheck": false,
				"btnEnable": false
			};
			var oModel = new JSONModel(oPropertyModelInvCreation);
			return oModel;
		}
    };

});