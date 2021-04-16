/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KronArticle {
        "content": string;
        "isValidContentLogo": boolean;
        "mainSectionWrite": string;
        "titles": string;
    }
    interface KronBox {
        "displaymode": string;
    }
    interface KronFigure {
        "figcaption": string;
        "image": any;
        "isValid": boolean;
    }
    interface KronForm {
        "information": string;
    }
    interface KronHeadline {
        "appereance": string;
        "backgroundpicture": string;
    }
    interface KronNavbar {
        "appereance": string;
        "contactlogo": string;
        "kronlayout": string;
        "navlogo": string;
    }
    interface KronSection {
        "header": string;
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLKronArticleElement extends Components.KronArticle, HTMLStencilElement {
    }
    var HTMLKronArticleElement: {
        prototype: HTMLKronArticleElement;
        new (): HTMLKronArticleElement;
    };
    interface HTMLKronBoxElement extends Components.KronBox, HTMLStencilElement {
    }
    var HTMLKronBoxElement: {
        prototype: HTMLKronBoxElement;
        new (): HTMLKronBoxElement;
    };
    interface HTMLKronFigureElement extends Components.KronFigure, HTMLStencilElement {
    }
    var HTMLKronFigureElement: {
        prototype: HTMLKronFigureElement;
        new (): HTMLKronFigureElement;
    };
    interface HTMLKronFormElement extends Components.KronForm, HTMLStencilElement {
    }
    var HTMLKronFormElement: {
        prototype: HTMLKronFormElement;
        new (): HTMLKronFormElement;
    };
    interface HTMLKronHeadlineElement extends Components.KronHeadline, HTMLStencilElement {
    }
    var HTMLKronHeadlineElement: {
        prototype: HTMLKronHeadlineElement;
        new (): HTMLKronHeadlineElement;
    };
    interface HTMLKronNavbarElement extends Components.KronNavbar, HTMLStencilElement {
    }
    var HTMLKronNavbarElement: {
        prototype: HTMLKronNavbarElement;
        new (): HTMLKronNavbarElement;
    };
    interface HTMLKronSectionElement extends Components.KronSection, HTMLStencilElement {
    }
    var HTMLKronSectionElement: {
        prototype: HTMLKronSectionElement;
        new (): HTMLKronSectionElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "kron-article": HTMLKronArticleElement;
        "kron-box": HTMLKronBoxElement;
        "kron-figure": HTMLKronFigureElement;
        "kron-form": HTMLKronFormElement;
        "kron-headline": HTMLKronHeadlineElement;
        "kron-navbar": HTMLKronNavbarElement;
        "kron-section": HTMLKronSectionElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KronArticle {
        "content"?: string;
        "isValidContentLogo"?: boolean;
        "mainSectionWrite"?: string;
        "titles"?: string;
    }
    interface KronBox {
        "displaymode"?: string;
    }
    interface KronFigure {
        "figcaption"?: string;
        "image"?: any;
        "isValid"?: boolean;
    }
    interface KronForm {
        "information"?: string;
    }
    interface KronHeadline {
        "appereance"?: string;
        "backgroundpicture"?: string;
    }
    interface KronNavbar {
        "appereance"?: string;
        "contactlogo"?: string;
        "kronlayout"?: string;
        "navlogo"?: string;
    }
    interface KronSection {
        "header"?: string;
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "kron-article": KronArticle;
        "kron-box": KronBox;
        "kron-figure": KronFigure;
        "kron-form": KronForm;
        "kron-headline": KronHeadline;
        "kron-navbar": KronNavbar;
        "kron-section": KronSection;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kron-article": LocalJSX.KronArticle & JSXBase.HTMLAttributes<HTMLKronArticleElement>;
            "kron-box": LocalJSX.KronBox & JSXBase.HTMLAttributes<HTMLKronBoxElement>;
            "kron-figure": LocalJSX.KronFigure & JSXBase.HTMLAttributes<HTMLKronFigureElement>;
            "kron-form": LocalJSX.KronForm & JSXBase.HTMLAttributes<HTMLKronFormElement>;
            "kron-headline": LocalJSX.KronHeadline & JSXBase.HTMLAttributes<HTMLKronHeadlineElement>;
            "kron-navbar": LocalJSX.KronNavbar & JSXBase.HTMLAttributes<HTMLKronNavbarElement>;
            "kron-section": LocalJSX.KronSection & JSXBase.HTMLAttributes<HTMLKronSectionElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
