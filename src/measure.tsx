"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";

export type MeasureContext = {
  measureWrappingTextNoPadding(
    text: string,
    maxWidth: number,
    fs: number,
    lh: number,
    fw: number
  ): Promise<{ w: number; h: number }>;
  // measureElement( // <--------------------------- Try to get this working again one day
  //   element: React.ReactElement,
  //   maxWidth: number
  // ): Promise<{
  //   w: number;
  //   h: number;
  // }>;
};

const Context = createContext<MeasureContext | null>(null);

export function MeasureProvider({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    outerRef.current = document.getElementById("newDivTester2");
    innerRef.current = document.getElementById("newDivTester2Inner");
  }, []);

  function measureWrappingTextNoPadding(
    text: string,
    maxWidth: number,
    fs: number,
    lh: number,
    fw: number
  ): Promise<{ w: number; h: number }> {
    return new Promise<{ w: number; h: number }>((resolve, reject) => {
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

      const innerRect = innerRef.current.getBoundingClientRect();
      const wh = {
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

  return (
    <Context.Provider value={{ measureWrappingTextNoPadding }}>
      <div
        id="newDivTester"
        style={{ position: "fixed", opacity: 0, pointerEvents: "none" }}
      >
        <div id="newDivTester1">
          <div
            id="newDivTester1Inner"
            style={{
              width:
                "fit-content; width: -moz-fit-content; width: -webkit-fit-content",
              height:
                "fit-content; height: -moz-fit-content; height: -webkit-fit-content",
            }}
          ></div>
        </div>
        <div id="newDivTester2">
          <div
            id="newDivTester2Inner"
            style={{
              display: "inline",
              width:
                "fit-content; width: -moz-fit-content; width: -webkit-fit-content",
              height:
                "fit-content; height: -moz-fit-content; height: -webkit-fit-content",
            }}
          ></div>
        </div>
      </div>
      {children}
    </Context.Provider>
  );
}

export const useMeasure = () => useContext(Context);
