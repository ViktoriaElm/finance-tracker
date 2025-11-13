import "./Button.css"

interface ButtonProps {
    buttonWidth?: string;
    buttonHeight?: string;
    buttonContent: string;
}

const FormButton: React.FC<ButtonProps> = ({ buttonContent }) => {
    return (
        <button className="form-button">
            <svg width="80px" height="80px" viewBox="0 0 80 80" className="border-form-button">
                <polyline points="69,1 69,69 1,69 1,1 69,1" className="bg-line" />
                <polyline points="69,1 69,69 1,69 1,1 69,1" className="hl-line" />
            </svg>
            {buttonContent}
        </button>
    );
}

export default FormButton;
