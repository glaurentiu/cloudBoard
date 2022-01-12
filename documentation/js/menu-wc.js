'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cloud-board documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' : 'data-target="#xs-components-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' :
                                            'id="xs-components-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' }>
                                            <li class="link">
                                                <a href="components/AddMaterialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddMaterialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddRaportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddRaportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddRequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddRequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddRequestRaportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddRequestRaportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalculatorCctvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculatorCctvComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteMaterialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteMaterialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteRequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteRequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RaportBillingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaportBillingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RaportDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaportDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RaportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' : 'data-target="#xs-pipes-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' :
                                            'id="xs-pipes-links-module-AppModule-e8104810b7554b1551cb1eb99d4cd3d9e1cb5c779545c2642ed8b6ad3c5e4b6690f378ce039289837e87e532896986b41f4642fb3a74a8becbeafbf57e866951"' }>
                                            <li class="link">
                                                <a href="pipes/MaterialSearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialSearchPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ProjectSearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectSearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaterialService.html" data-type="entity-link" >MaterialService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectsService.html" data-type="entity-link" >ProjectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RaportService.html" data-type="entity-link" >RaportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestService.html" data-type="entity-link" >RequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UiService.html" data-type="entity-link" >UiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/cctv.html" data-type="entity-link" >cctv</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogMaterial.html" data-type="entity-link" >DialogMaterial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogRequest.html" data-type="entity-link" >DialogRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Material.html" data-type="entity-link" >Material</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MaterialF.html" data-type="entity-link" >MaterialF</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Raport.html" data-type="entity-link" >Raport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/res.html" data-type="entity-link" >res</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});