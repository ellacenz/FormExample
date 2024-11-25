const data = req.query;

// const data = {subclassId: "5DE34CA4-C792-EF11-8473-000D3AD7AE94"};

if (data.subclassId) {

    const forms = await entities.forms_design.find({
        where: {
            subgroupid: data.subclassId,
            released: true
        },
        order: {
            updatedAt: "DESC"
        },
    });

    if (forms.length > 0) {
        result = forms[0];
    } else {
        result = null;
    }

    // console.log(forms);
}

// log.info(forms);


complete();