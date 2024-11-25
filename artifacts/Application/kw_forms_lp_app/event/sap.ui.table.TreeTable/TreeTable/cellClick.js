
let selectedObj = oEvent.mParameters.rowBindingContext.getObject();
if (selectedObj.len == undefined) {
    let classificationId = selectedObj.id;
    if (classificationId && classificationId != "") {
        var options = {
            parameters: {subclassId: classificationId}
        };

        PageForms.setTitle(selectedObj.name.toUpperCase());
        apigetFormBySubClass(options);
    }
}