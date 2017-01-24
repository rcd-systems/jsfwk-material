class RcdMaterialSnackbar extends RcdDivElement {
    constructor(message) {
        super();
        this.message = new RcdTextDivElement(message).
            init().
            addClass('rcd-material-snackbar-message');
    }

    init() {
        return this.addClass('rcd-material-snackbar').
            addChild(this.message);
    }

}

function showSnackbar(text, parent, timeout = 4000) {
    var rcdSnackbar = new RcdMaterialSnackbar(text).init().
        addClickListener(() => {
            rcdSnackbar.hide(parent);
        }).
        show(parent);
    setTimeout(() => {
        rcdSnackbar.hide(parent);
    }, timeout);
    return rcdSnackbar;
}