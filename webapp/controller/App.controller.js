sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.ibs.ibsappivenpcanalytics.controller.App", {
        onInit: function() {
          // oContext=this
          // oDatamodel = this.getOwnerComponent().getModel("datamodel")
   
          
          // this.getView().setModel(oDatamodel, "data")
        },

        onItemSelect: function(oEvent){
          debugger
          // var userSelected = oEvent.getParameter("item").getkey();
          var userSelected = oEvent.mParameters.item.mProperties.key;
          this.getOwnerComponent().getRouter().navTo(userSelected);
        }
      });
    }
  );
  