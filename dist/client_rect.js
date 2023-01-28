"use client";
import { useCallback, useEffect, useState } from "react";
export function useClientRect() {
    var _a = useState(null), rect = _a[0], setRect = _a[1];
    var _b = useState(null), div = _b[0], setDiv = _b[1];
    var ref = useCallback(function (div) {
        if (!div) {
            return;
        }
        setRect(div.getBoundingClientRect());
        setDiv(div);
    }, []);
    useEffect(function () {
        function resize() {
            if (!div) {
                return;
            }
            setRect(div.getBoundingClientRect());
        }
        window.addEventListener("resize", resize);
        return function () { return window.removeEventListener("resize", resize); };
    }, [div]);
    return { rect: rect, ref: ref };
}
//# sourceMappingURL=client_rect.js.map