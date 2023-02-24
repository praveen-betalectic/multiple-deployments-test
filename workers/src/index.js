import { returnString } from "../../globalFunctions/returnString.mjs";

export default {
  async fetch(request, env, ctx) {
    const newStr = await returnString("Hello World!");
    return new Response(newStr);
  },
};
