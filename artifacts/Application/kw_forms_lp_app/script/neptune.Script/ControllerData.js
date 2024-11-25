const formsExampleData = {
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

function getTodaysDate() {
    let now   = new Date();
    let month = now.getMonth()+1;
    if (month < 10) month = "0" + month;
    let day   = now.getDate();
    if (day < 10) day = "0" + day;

    now = day + "." + month + "." + now.getFullYear();

    return now;
}
