sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'nlab.ai.uicomparequotation',
            componentId: 'QuotationComparisonList',
            contextPath: '/QuotationComparison'
        },
        CustomPageDefinitions
    );
});