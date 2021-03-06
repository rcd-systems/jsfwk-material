class RcdMaterialRoute extends RcdObject{
    constructor(params) {
        super();
        this.state = params.state;
        this.name = params.name;
        this.iconArea = params.iconArea;
        this.callback = params.callback;
        this.hideCallback = params.hideCallback;
    }
}

class RcdMaterialSinglePageApplication extends RcdObject{
    constructor(params) {
        super();
        this.title = params.title;
        this.bar = new RcdMaterialApplicationBar(params.title, {
            search: params.search
        }).init();
        this.nav = new RcdMaterialNavigationDrawer().init();
        this.main = new RcdMaterialMain().init();

        this.shell = new RcdMaterialApplicationShell({
            bar: this.bar,
            nav: this.nav,
            main: this.main,
            navBehaviour: params.nav && params.nav.behaviour || RcdMaterialNavigationDrawerBehaviour.PERMANENT
        }).init();
        this.routes = {};
        this.defaultRoute;
        this.currentRoute;
    }

    init() {
        return super.init();
    }

    setTitle(title) {
        this.title = title;
        this.bar.setTitle(title);
        return this;
    }

    setActionItems(actionItems) {
        this.bar.setActionItems(actionItems);
        return this;
    }

    setDefaultRoute(route) {
        this.defaultRoute = route;
        RcdHistoryRouter.setDefaultRoute(() => {
            if (this.currentRoute && this.currentRoute.hideCallback) {
                this.currentRoute.hideCallback(this.main);
            }
            this.currentRoute = route;
            this.setTitle(this.title);
            this.main.removeAllChildren();
            route.callback(this.main);
        });
        return this;
    }

    addRoute(route) {
        if (!route) {
            return this;
        }
        this.routes[route.state] = route;
        let navDrawerItem;
        if (route.name) {
            navDrawerItem = new RcdMaterialNavigationDrawerItem({
                iconArea: route.iconArea,
                text: route.name
            }).init().
                addClass(route.iconArea && 'icon-item').
                setStateRef(route.state);
            this.nav.addItem(navDrawerItem);
        }
        RcdHistoryRouter.addRoute(route.state, () => {
            if (this.currentRoute && this.currentRoute.hideCallback) {
                this.currentRoute.hideCallback(this.main);
            }
            this.currentRoute = route;
            this.setTitle(route.name);
            if(navDrawerItem) {
                this.nav.selectItem(navDrawerItem);
            }
            this.main.removeAllChildren();
            route.callback(this.main);
        });
        return this;
    }

    start(parent) {
        RcdHistoryRouter.refresh();
        this.shell.setParent(parent);
    }
}

