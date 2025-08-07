import { serverAuth } from "~~/server/utils/auth"; // path to your auth file

export default eventHandler(event => serverAuth().handler(toWebRequest(event)))