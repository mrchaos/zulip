/* eslint-disable strict */

import * as mk from "../static/js/markdown";
import * as cf from "../static/js/markdown_config";


export function parseMsg(raw_content) {
    const helper_config = cf.get_helpers();
    const {content} = mk.parse({raw_content, helper_config});
    console.log(content);
}

