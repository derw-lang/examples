import { flatRender } from "@eeue56/coed";
import express from "express";
import { readFileSync } from "fs";
import { initialModel, ListItem, view } from "./Main";

const data = {
    ...initialModel,
    list: [
        ListItem({ id: 0, label: "hello", completed: true }),
        ListItem({ id: 1, label: "world", completed: false }),
    ],
};

function main() {
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
        const index = readFileSync("./index.html", "utf-8");
        const rendered = flatRender(view(data));
        let result = index.replace(
            `<div id="data"></div>`,
            `<div id="data" hidden>${JSON.stringify(data)}</div>`
        );
        result = result.replace(
            `<div id="root"></div>`,
            `<div id="root">${rendered}</div>`
        );
        res.send(result);
    });

    app.use(express.static("public"));

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

main();
