const formId = req.query.formid;
const sessionid = req.query.sessionid;
const elementId = req.query.elementid;
const elementData = [];

let where = { formid: formId };
if (sessionid) where.sessionid = sessionid;

const logs = await entities.forms_data_kw.find({
    where: where,
    order: { updatedAt: "DESC" },
});

for (i = 0; i < logs.length; i++) {
    const log = logs[i];

    let config;

    // Get Config
    for (iSetup = 0; iSetup < log.data.config.setup.length; iSetup++) {
        const section = log.data.config.setup[iSetup];

        for (iElement = 0; iElement < section.elements.length; iElement++) {
            const elementConfig = section.elements[iElement];
            if (elementConfig.id === elementId) config = elementConfig;

            if (elementConfig.elements) {
                for (iSubElement = 0; iSubElement < elementConfig.elements.length; iSubElement++) {
                    const elementSubConfig = elementConfig.elements[iSubElement];
                    if (elementSubConfig.id === elementId) config = elementSubConfig;
                }
            }
        }
    }

    if (config) {
        let content = {};

        switch (config.type) {
            case "CheckList":
                for (iItems = 0; iItems < config.items.length; iItems++) {
                    const item = config.items[iItems];
                    content[item.id] = log.data.data[item.id];
                }
                break;

            default:
                if (config.fieldName) {
                    content[config.fieldName] = log.data.data[config.fieldName];
                } else {
                    content[elementId] = log.data.data[elementId];
                }
                break;
        }

        // if (content) {
        elementData.push({
            updatedBy: log.updatedBy,
            updatedAt: log.updatedAt,
            config: config,
            data: content,
        });
        // }
    }
}

result.data = elementData;
complete();
