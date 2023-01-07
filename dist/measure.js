"use client";
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useRef } from "react";
var Context = createContext(null);
export function MeasureProvider(_a) {
    var children = _a.children;
    var outerRef = useRef(null);
    var innerRef = useRef(null);
    useEffect(function () {
        outerRef.current = document.getElementById("newDivTester2");
        innerRef.current = document.getElementById("newDivTester2Inner");
    }, []);
    function measureWrappingTextNoPadding(text, maxWidth, fs, lh, fw) {
        return new Promise(function (resolve, reject) {
            if (!outerRef.current || !innerRef.current) {
                return reject("Div testers not ready");
            }
            outerRef.current.style.width = maxWidth + "px";
            innerRef.current.innerHTML = text;
            innerRef.current.style.fontSize = fs + "px";
            innerRef.current.style.lineHeight = lh + "";
            innerRef.current.style.fontWeight = fw + "";
            outerRef.current.style.fontSize = fs + "px"; // Definitely need this for some reason!
            outerRef.current.style.lineHeight = lh + ""; // Definitely need this for some reason!
            outerRef.current.style.fontWeight = fw + ""; // Definitely need this for some reason!
            var innerRect = innerRef.current.getBoundingClientRect();
            var wh = {
                w: Math.ceil(innerRect.width),
                h: Math.ceil(innerRect.height),
            };
            innerRef.current.innerHTML = "";
            resolve(wh);
        });
    }
    // const [d, setD] = useState<{
    //   el: React.ReactElement;
    //   maxWidth: number;
    //   callback: () => {};
    // } | null>(null);
    // function measureElement(
    //   element: React.ReactNode,
    //   maxWidth: number
    // ): Promise<{ w: number; h: number }> {
    //   return new Promise<{ w: number; h: number }>((resolve, reject) => {
    //     const outer = document.getElementById("newDivTester1");
    //     const inner = document.getElementById("newDivTester1Inner");
    //     if (!outer || !inner) {
    //       return reject("Div testers not ready");
    //     }
    //     outer.style.width = maxWidth + "px";
    //     // flushSync(() => {
    //     if (!rootRef.current) {
    //       throw new Error("Root not yet ready");
    //     }
    //     rootRef.current.appendChild(element);
    //     // const root = ReactDOM.createRoot(rootRef.current);
    //     // root.render(element);
    //     // });
    //     resolve({ w: 100, h: 100 });
    //     // ReactDOM.render(element, inner, () => {
    //     //   const innerRect = inner.getBoundingClientRect();
    //     //   const wh = {
    //     //     w: Math.ceil(innerRect.width),
    //     //     h: Math.ceil(innerRect.height),
    //     //   };
    //     //   ReactDOM.unmountComponentAtNode(inner);
    //     //   resolve(wh);
    //     // });
    //   });
    // }
    return (_jsxs(Context.Provider, __assign({ value: { measureWrappingTextNoPadding: measureWrappingTextNoPadding } }, { children: [_jsxs("div", __assign({ id: "newDivTester", style: { position: "fixed", opacity: 0, pointerEvents: "none" } }, { children: [_jsx("div", __assign({ id: "newDivTester1" }, { children: _jsx("div", { id: "newDivTester1Inner", style: {
                                width: "fit-content; width: -moz-fit-content; width: -webkit-fit-content",
                                height: "fit-content; height: -moz-fit-content; height: -webkit-fit-content",
                            } }, void 0) }), void 0), _jsx("div", __assign({ id: "newDivTester2" }, { children: _jsx("div", { id: "newDivTester2Inner", style: {
                                display: "inline",
                                width: "fit-content; width: -moz-fit-content; width: -webkit-fit-content",
                                height: "fit-content; height: -moz-fit-content; height: -webkit-fit-content",
                            } }, void 0) }), void 0)] }), void 0), children] }), void 0));
}
export var useMeasure = function () { return useContext(Context); };
//# sourceMappingURL=measure.js.map