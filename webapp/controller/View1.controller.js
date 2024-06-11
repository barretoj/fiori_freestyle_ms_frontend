sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zjfbov.controller.View1", {
            onInit: function () {
                // Cria a referencia do objeto da View
                var oView  = this.getView();

                // Cria o modelo JSON
                var oModel = new sap.ui.model.json.JSONModel();

                // Inseri os dados no modelo
                oModel.setData({"usuario": {"nome": "Jefferson"}});

                // Inseri o modelo na View 
                oView.setModel(oModel);
            },

            onExibirMensagem: function(){
                var oI18n  = this.getView().getModel("i18n").getResourceBundle();
                var oModel = this.getView().getModel();

                // Extrai os dados do modelo (JSON)
                var oData  = oModel.getData();
                var sText = oI18n.getText("welcomeMsg",[oData.usuario.nome]);
                alert(sText);
            }

        });
    });
