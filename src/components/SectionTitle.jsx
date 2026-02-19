const SectionTitle = ({ title, subtitle }) => {
    return (
        <div>
            {subtitle && <p>{subtitle}</p>}
            <h2>{title}</h2>
        </div>
    );
};

export default SectionTitle;
