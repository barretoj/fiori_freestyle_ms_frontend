/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zjfb_ov/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
