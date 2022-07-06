import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import UserInfo from "../component/shared/menu/UserInfo";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;

        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el(".nav",
                        el(".logo",
                            el("a", { href: "/" },
                                el("img", { src: "/images/logo/klubs.svg", alt: "KLUBS LOGO" }),
                            ),
                        ),
                        new PCMenu(),
                        new MobileMenu(),
                        el(".right",
                            new UserInfo(),
                            el("a.mobile-info",
                                el("img", { src: "/images/icn/profile.svg", alt: "profile" }),
                            ),
                        ),
                    ),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                ),
            )),
        );
    }

    public set title(title: string) {
        document.title = `${title} | KLUBS`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}