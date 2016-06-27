import * as V000Render from "./0.0.0/render";

export default async function render(comp: IComposition) {
    // switch (comp.constructor.apiVersion) {
    //     case "0.0.0": V000Render.render(comp);
    // }

    await V000Render.render(comp);
}
