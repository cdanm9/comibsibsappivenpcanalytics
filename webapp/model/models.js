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
		createAppDetailsModel:function(){
			var oAppDetails = {
				AppList: [
					{
						AppKey: "Master",
						AppText: "PO Confirmation"
					},
					{
						AppKey: "Page1",
						AppText: "Order Analytics"
					},
					{
						AppKey: "Page2",
						AppText: "ASN Creation"
					},
					{
						AppKey: "SESPOList",
						AppText: "SES Creation"
					},
					{
						AppKey: "invcreation",
						AppText: "Invoice Creation"
					},
					{
						AppKey: "InvCreationAI",
						AppText: "Invoice Creation AI"
					},
					{
						AppKey: "RFQCreation",
						AppText: "RFQ Creation"
					},
					{
						AppKey: "SchedAgreement",
						AppText: "Scheduler Agreement"
					},
					{
						AppKey: "RouteView1",   
						AppText: "Non PO Invoice Creation"
					},
					{
						AppKey: "prcOrderReport",
						AppText: "Purchase Order Reports",
						SubApps: [    
							{ AppKey: "invoice_payment_rpt", AppText: "Invoice Payment Report" },
							{ AppKey: "pc_grn_fiori_rept", AppText: "GRN Fiori Report" },
							{ AppKey: "po_report", AppText: "PO Report" },
							{ AppKey: "po_report_byr", AppText: "PO Report Buyer" },
							{ AppKey: "po_status_report", AppText: "PO Status Report" },
							{ AppKey: "potoinvoice_fiori_rept", AppText: "PO To Invoice Fiori Report" }
						]
					}
				]
			};
			var oModel = new JSONModel(oAppDetails);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
		},
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
				"btnEnable": false,
				"inputEnable": false,//RFQ Creation App
				"BtnEnable1": false,//RFQ Creation App
				"BtnEnable": false,  //RFQ Creation App  
				"fieldEnable": true //Scheduler Agreement    
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