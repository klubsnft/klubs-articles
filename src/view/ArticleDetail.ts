import EditorJS from "@editorjs/editorjs";
import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class ArticleDetail implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Governance Play with";
        Layout.current.content.append(this.container = el(".article-detail-view",
            el("a.back-button", "< Back", {
                click: () => {
                    ViewUtil.go("/");
                }
            }),
            el("section",
                el("header",
                    el("section",
                        el(".title-container",
                            el("h1", "테스트"),
                            el(".date", "작성일 | 2022-07-07 07:30"),
                        ),
                    ),
                ),
                el(".content",
                    el("", { id: "editorjs" }),
                    el("hr"),
                    el(".controller-container",
                        el("a", "< Pre"),
                        el("a", "Next >"),
                    ),
                ),
            ),
        ));
        this.init();
    }

    private init() {
        new EditorJS({
            readOnly: true,
            data: {
                blocks: [
                    {
                        type: "paragraph",
                        data: {
                            text: "Hello, Editor.js",
                        }
                    }
                ]
            }
        })
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}