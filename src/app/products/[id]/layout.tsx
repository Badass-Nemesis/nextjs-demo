import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
            <div>
                <h2>Featured Products section</h2>
            </div>
        </div>
    );
}