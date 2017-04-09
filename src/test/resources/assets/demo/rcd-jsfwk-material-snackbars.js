function createSnackbarsRoute() {
    const breadcrumbsLayout = new RcdMaterialBreadcrumbsLayout().init().
        addBreadcrumb(new RcdMaterialBreadcrumb('Demo', () => RcdHistoryRouter.getInstance().setState()).init()).
        addBreadcrumb(new RcdMaterialBreadcrumb('Snackbars').init());

    const displaySnackbar = () => new RcdMaterialSnackbar('Simple snackbar').init().open();
    const displaySnackbarButton = new RcdMaterialButtonArea('Display snackbar', displaySnackbar).init();

    const displaySnackbarWithAction = () => new RcdMaterialSnackbar('Snackbar with action').init().
        addAction('Action', () => alert('Snackbar action')).
        open();
    const displaySnackbarWithActionButton = new RcdMaterialButtonArea('Display snackbar with action', displaySnackbarWithAction).init();


    const sectionContent = new RcdDivElement().init().
        addChild(displaySnackbarButton).
        addChild(displaySnackbarWithActionButton);
    const layout = new RcdMaterialSectionLayout('Snackbars', sectionContent).init();

    return {
        state: 'snackbars',
        name: 'Snackbars',
        iconArea: new RcdGoogleMaterialIconArea('open_in_new').init(),
        callback: (main) => main.addChild(breadcrumbsLayout).addChild(layout)
    };
}