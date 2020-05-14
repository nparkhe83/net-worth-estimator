import { app } from "./app";
import config from "config";

const port = config.get("port");

const PORT = process.env.PORT || port;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
