try {
    let log = {
        data: req.body,
        completed: req.body.completed,
        valid: req.body.valid,
        sessionid: req.body.sessionid,
        formid: req.body.config.id,
    };

    log = await entities.forms_data_kw.save(log);

    result.data = {
        log: log,
        body: req.body,
    };
    complete();
} catch (e) {
    result.data = {
        error: e,
        body: req.body,
    };

    complete();
}