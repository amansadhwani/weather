import React, { createContext, useContext, useCallback } from "react";
import { TChildren } from "../types/tabs.context";

const TabContext = createContext({});

export default function Tab({ children, value, onChange }: any) {
  return (
    <TabContext.Provider value={{ value, onChange }}>
      {children}
    </TabContext.Provider>
  );
}

Tab.Heads = ({ children }: TChildren) => {
  return <div className="heads">{children}</div>;
};

Tab.Item = React.memo(({ label, index }: any) => {
  const { value, onChange } = useContext<any>(TabContext);
  const handleClick = useCallback(() => {
    onChange(index);
  }, [index, onChange]);
  return (
    <div
      onClick={handleClick}
      className={`item ${index === value ? "active" : null}`}
    >
      {label}
    </div>
  );
});
