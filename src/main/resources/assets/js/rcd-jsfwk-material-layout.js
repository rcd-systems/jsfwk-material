class RcdMaterialLayout extends RcdDivElement {
    constructor() {
        super();
    }

    init() {
        return super.init().addClass('rcd-material-layout')
    }
}

class RcdMaterialSectionLayout extends RcdMaterialLayout {
    constructor(title, content) {
        super();
        const h1 = new RcdH1Element().init().
            addClass('rcd-material-section-title').
            setText(title);
        this.section = new RcdSectionElement().init().
            addClass('rcd-material-section').
            addChild(h1);
        if (content) {
            this.section.addChild(content);
        }
    }

    init() {
        return super.init().
            addClass('rcd-material-layout').
            addChild(this.section);
    }

    createSubSection(title) {
        const h2 = new RcdH2Element().init().
            addClass('rcd-material-subsection-title').
            setText(title);
        const subSection = new RcdSectionElement().init().
            addClass('rcd-material-section').
            addClass('rcd-material-subsection').
            addChild(h2);
        this.addChild(subSection);
        return subSection;
    }

    addSubSection(title, content) {
        this.createSubSection(title).
            addChild(content);
        return this;
    }
}

