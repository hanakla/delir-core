var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import * as V000Render from "./0.0.0/render";
export default function render(comp) {
    return __awaiter(this, void 0, void 0, function* () {
        // switch (comp.constructor.apiVersion) {
        //     case "0.0.0": V000Render.render(comp);
        // }
        yield V000Render.render(comp);
    });
};
