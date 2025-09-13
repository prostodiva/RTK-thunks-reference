import type { ReactNode } from "react";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface ExpandablePanelProps {
  header: ReactNode;
  children: ReactNode;
}

function ExpandablePanel({ header, children }: ExpandablePanelProps) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="mb-2 border rounded w-96">
                <div className="flex p-2 justify-between items-center">
                    <div className="flex flex-row items-center justify-between">
                        {header}
                    </div>
                    <div onClick={handleClick} className="cursor-pointer">
                         {expanded ? <GoChevronDown /> : <GoChevronLeft />}
                    </div>
                </div>
                {
                    expanded && <div className="p-2 border-t">
                    {children}
                </div>
                }
        </div>
    );
}

export default ExpandablePanel;