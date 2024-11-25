let formsExampleData = {
    name: "Karolina",
    measurements: [{
        meas_area: "Warehouse Floor",
        meas_m2: "120",
        meas_condition: 2
    }, {
        meas_area: "Office Space",
        meas_m2: "12",
        meas_condition: 4
    }, {
        meas_area: "Loading Dock",
        meas_m2: "80",
        meas_condition: 3
    }, {
        meas_area: "Storage Room",
        meas_m2: "90",
        meas_condition: 5
    }, {
        meas_area: "Parking Area",
        meas_m2: "45",
        meas_condition: 3
    }]
};


if (sap.n) {
    sap.n.Shell.attachBeforeDisplay(function(data, init) {

        // Get today's date for prefilling the date field
        let now   = new Date();
        let month = now.getMonth()+1;
        if (month < 10) month = "0" + month;
        let day   = now.getDate();
        if (day < 10) day = "0" + day;

        now = day + "." + month + "." + now.getFullYear();

        formsExampleData.date = now;
        
        if (data.formId == "7279A4E7-8D8C-EF11-8473-000D3AD94455") {
            Button1.setEnabled(false);
        } else {
            Button1.setEnabled(true);
        }

        ScrollContainer.removeAllContent();

        debugger;
        FORMS.build(ScrollContainer, {
            id: data.formId,
            data: formsExampleData,
            // config: formConfig,
        });

    });
}