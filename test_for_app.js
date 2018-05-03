let tressa = require('./tressa');
let app = require('../app.js');



tressa.title("Test app");

app.create("marta");
console.log("marta" == app.read(0))
tressa.assert("marta" == app.read(0), "marta is marta");

app.update(0, "Peace");
console.log(app.db[0], app.read(0));
tressa.assert("Peace" == app.read(0), "update should update");

app.update(0, "");
tressa.assert("Peace" == app.read(0), "update empty shouldn't update");

app.delete(0);
tressa.assert(undefined == app.read(0), "deleting should delete");
