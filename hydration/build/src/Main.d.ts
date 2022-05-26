import { HtmlNode } from "../derw-packages/derw-lang/html/src/Html";
export { initialModel };
export { view };
declare type Model = {
    text: string;
};
declare function Model(args: {
    text: string;
}): Model;
declare const initialModel: Model;
declare type Noop = {
    kind: "Noop";
};
declare function Noop(args: {}): Noop;
declare type Flip = {
    kind: "Flip";
};
declare function Flip(args: {}): Flip;
declare type Msg = Noop | Flip;
declare function view(model: Model): HtmlNode<Msg>;
