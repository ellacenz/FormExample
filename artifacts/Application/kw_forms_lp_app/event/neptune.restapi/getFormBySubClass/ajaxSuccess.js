if (typeof modelform.getData() == "object") {


    // Get today's date for prefilling the date field
    let now = getTodaysDate();

    formsExampleData.date = now;
    
    if (modelform.getData().id == "7279A4E7-8D8C-EF11-8473-000D3AD94455") {
        ButtonConfirm.setEnabled(false);
    } else {
        ButtonConfirm.setEnabled(true);
    }

    FORMS.build(ScrollContainer, {
        id: modelform.getData().id,
        data: formsExampleData,
        // config: formConfig,
    });
    
    App.to(PageForms);


    // AppCache.Load("kw_forms_application", {
    //     startParams: {
    //         formId: modelform.getData().id
    //     }
    // });

} else {
    sap.m.MessageToast.show("No form could be found for this type of classification");
}