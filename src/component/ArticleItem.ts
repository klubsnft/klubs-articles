import { DomNode, el } from "skydapp-browser";
import ViewUtil from "../view/ViewUtil";

export default class ArticleItem extends DomNode {

    constructor(link: string, image: string, title: string, content: string) {
        super(".article-item");
        this.append(
            el("a", { click: () => { ViewUtil.go(`detail/${link}`) } },
                el(".img-container",
                    el("img", { src: image, alt: title }),
                ),
                el("h6", title),
                el(".caption-container",
                    el("p", content),
                ),
            )
        );
    }
}