sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nlab/ai/uicomparequotation/test/integration/pages/QuotationComparisonList",
	"nlab/ai/uicomparequotation/test/integration/pages/QuotationComparisonObjectPage"
], function (JourneyRunner, QuotationComparisonList, QuotationComparisonObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nlab/ai/uicomparequotation') + '/test/flpSandbox.html#nlabaiuicomparequotation-tile',
        pages: {
			onTheQuotationComparisonList: QuotationComparisonList,
			onTheQuotationComparisonObjectPage: QuotationComparisonObjectPage
        },
        async: true
    });

    return runner;
});

