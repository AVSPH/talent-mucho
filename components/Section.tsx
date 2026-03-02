interface SectionProps {
    id?: string;
    children: React.ReactNode;
    variant?: "default" | "alt" | "accent";
    className?: string;
}

export default function Section({
    id,
    children,
    variant = "default",
    className = "",
}: SectionProps) {
    const bgClasses = {
        default: "bg-beige-50",
        alt: "bg-beige-100",
        accent: "bg-beige-200",
    };

    return (
        <section id={id} className={`section-padding ${bgClasses[variant]} ${className}`}>
            <div className="section-container">{children}</div>
        </section>
    );
}
