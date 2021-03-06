function createDialogsRoute() {
    const breadcrumbsLayout = new RcdMaterialBreadcrumbsLayout().init().
        addBreadcrumb(new RcdMaterialBreadcrumb('Demo').init().setStateRef('')).
        addBreadcrumb(new RcdMaterialBreadcrumb('Dialogs').init());

    const displayDetailsDialog = () => new RcdMaterialDetailsDialog({
        title: 'Details dialog',
        text: 'Details dialog text'
    }).init().open();
    const displayDetailsButton = new RcdMaterialButtonArea('Details dialog', displayDetailsDialog).init().setTooltip('Details dialog');

    const displayConfirmationDialog = () => new RcdMaterialConfirmationDialog({
        title: 'Confirmation dialog',
        text: 'Confirmation dialog text',
        callback: () => alert('Confirmation')
    }).init().
        open();
    const displayConfirmationButton = new RcdMaterialButtonArea('Confirmation dialog', displayConfirmationDialog).init();

    const displaySelectionDialog = () => new RcdMaterialSelectionDialog({
        title: 'Selection dialog',
        label: 'Label',
        options: ['Option1', 'Option2'],
        callback: (selectedValue) => alert('Selected value: ' + selectedValue)
    }).init().
        open();
    const displaySelectionButton = new RcdMaterialButtonArea('Selection dialog', displaySelectionDialog).init();

    const displayInputDialog = () => new RcdMaterialInputDialog({
        title: 'Input dialog',
        label: 'Label',
        placeholder: 'placeholder',
        confirmationLabel: 'create',
        callback: (enteredValue) => alert('Entered value: ' + enteredValue)
    }).init().
        open();
    const displayInputButton = new RcdMaterialButtonArea('Input dialog', displayInputDialog).init();

    const displayInfoDialog = () => {
        const infoDialog = new RcdMaterialInfoDialog({
            title: 'Textual loader dialog',
            text: 'Loading something (0/2)...'
        }).init().
            open();
        setTimeout(() => infoDialog.setInfoText('Loading something (1/2)...'), 1000);
        setTimeout(() => infoDialog.close(), 2000);
    };
    const displayInfoButton = new RcdMaterialButtonArea('Info dialog', displayInfoDialog).init();
    
    const displayDarkInfoDialog = () => {
        const infoDialog = new RcdMaterialInfoDialog({
            title: 'Textual loader dialog',
            text: 'Loading something (0/2)...',
            overlay: true
        }).init().
        open();
        setTimeout(() => infoDialog.setInfoText('Loading something (1/2)...'), 1000);
        setTimeout(() => infoDialog.close(), 2000);
    };
    const displayDarkInfoButton = new RcdMaterialButtonArea('Info dialog with overlay', displayDarkInfoDialog).init();


    const sectionContent = new RcdDivElement().init().
        addChild(displayDetailsButton).
        addChild(displayConfirmationButton).
        addChild(displaySelectionButton).
        addChild(displayInputButton).
        addChild(displayInfoButton).
        addChild(displayDarkInfoButton);
    const layout = new RcdMaterialSectionLayout('Dialogs', sectionContent).init();

    return new RcdMaterialRoute({
        state: 'dialogs',
        name: 'Dialogs',
        iconArea: new RcdGoogleMaterialIconArea('open_in_new').init(),
        callback: (main) => main.addChild(breadcrumbsLayout).addChild(layout)
    });
}