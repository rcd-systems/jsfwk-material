function createFieldsRoute() {
    const breadcrumbsLayout = new RcdMaterialBreadcrumbsLayout().init()
        .addBreadcrumb(new RcdMaterialBreadcrumb('Demo', () => RcdHistoryRouter.setState()).init())
        .addBreadcrumb(new RcdMaterialBreadcrumb('Fields').init());

    const textField = new RcdMaterialTextField('mylabel', 'myplaceholder').init();

    const textArea = new RcdMaterialTextArea('mylabel', 'myplaceholder').init();

    const radioboxGroup = new RcdMaterialRadioboxGroup().init();
    const radiobox1 = radioboxGroup.createRadiobox()
        .addClickListener(() => radioboxGroup.select(radiobox1));
    const radiobox2 = radioboxGroup.createRadiobox()
        .addClickListener(() => radioboxGroup.select(radiobox2));


    const sectionContent = new RcdDivElement().init()
        .addChild(textField)
        .addChild(textArea)
        .addChild(radiobox1)
        .addChild(radiobox2);
    const layout = new RcdMaterialSectionLayout('Dialogs', sectionContent).init();

    return new RcdMaterialRoute({
        state: 'fields',
        name: 'Fields',
        callback: (main) => main.addChild(breadcrumbsLayout).addChild(layout)
    });
}