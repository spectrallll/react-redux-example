declare module "*.scss" {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    import React from "react";

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>
}: T;

declare module "*.jpg" {
    const value: string;
    export default value;
}
