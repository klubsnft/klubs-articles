import { DomNode, el } from "skydapp-browser";

export default class Select extends DomNode {
    private selectedValue: DomNode;
    private ul: DomNode;

    constructor(option?: JSON) {
        super(".select");
        this.append(
            el(".selected", {
                click: () => {
                    if (this.ul.domElement.style.display === "block") {
                        this.ul.style({
                            display: "none",
                        });
                    } else {
                        this.ul.style({
                            display: "block",
                        });
                    }
                }
            },
                this.selectedValue = el(".selected-value", "none"),
                el(".arrow"),
            ),
            this.ul = el("ul",
                el("li.option", "none", {
                    click: () => {
                        this.selectedValue.empty().appendText("none");
                        this.ul.style({
                            display: "none",
                        });
                    }
                }),
            ),
        );
    }
}