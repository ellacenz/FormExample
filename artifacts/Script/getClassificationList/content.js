let classificationList = [];

const groups = await entities.forms_group.find({
    where: {
        createdBy: "karolina.wochnik@neptune-software.com", // Simple conditions
    },
});

const subgroups = await entities.forms_subgroup.find({
    where: {
        createdBy: "karolina.wochnik@neptune-software.com", // Simple conditions
    },
});

for (const gr of groups) {
    let el = Object.assign({},gr);
    el.class = [];
    classificationList.push(el);
}

for (const cl of classificationList) {
    let subList = subgroups.filter(s => s.groupid == cl.id);
    for (const sl of subList) {
        cl.class.push(sl);
    }
    cl.len = cl.class.length;
}

result = {class: classificationList};
console.log(result);

complete();
