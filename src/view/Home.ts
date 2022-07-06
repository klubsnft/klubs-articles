import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import ArticleItem from "../component/ArticleItem";
import Layout from "./Layout";

export default class Home implements View {

    private articleList: DomNode;
    private bannerDisplay: DomNode;
    private bannerArtistDisplay: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.title = "Meet Connect Play with";
        Layout.current.content.append(this.container = el(".home-view",
            el("section",
                el("header",
                    el(".banner-container",
                        this.bannerDisplay = el("img", { src: "https://api.klu.bs/thumbnail?url=https%3A%2F%2Fstorage.googleapis.com%2Fklubs%2Fpfpbanner%2Fda7222bf-788a-4f05-b6f7-0c93325447b1.png", alt: "banner" }),
                    ),
                    el(".title-container",
                        el("h3", "Meet"),
                        el("h3", "Connect"),
                        el(".container",
                            el("h3", "Play"),
                            el("p", "with"),
                        ),
                        el("h2", "KLUBS"),
                        this.bannerArtistDisplay = el("p", "BY IDNAME"),
                    ),
                ),
                el("article",
                    el("h6", "KLUBS Article"),
                    this.articleList = el(".list-container",
                    ),
                ),
            ),
        ));
        this.init();
    }

    private init(): void {
        this.loadArticleList();
    }

    private loadArticleList(): void {
        this.articleList.append(
            new ArticleItem("Test", "https://klayrabbit.s3.ap-northeast-2.amazonaws.com/images/945.png", "tset", "test"),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}