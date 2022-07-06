import EditorJS from "@editorjs/editorjs";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class CreateArticle implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Article Play with";
        Layout.current.content.append(this.container = el(".create-article-view",
            el("section",
                el("header",
                    el("h1", "Create Article"),
                ),
                el(".content",
                    el("input", { placeholder: "제목" }),
                    el("", { id: "editorjs" }),
                    el("a", "등록하기"),
                ),
            ),
        ));
        this.init();
    }

    private init() {
        new EditorJS({
            placeholder: "아티클을 작성 해주세요.",
        })
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}