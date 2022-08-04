import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();

app.use(json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, async () => {
    await db.sync();
    console.log(`Running at port 3000`);
});
