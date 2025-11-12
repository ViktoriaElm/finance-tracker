import "./Button.css"

interface ButtonProps {
    buttonWidth?: string;
    buttonHeight?: string;
    buttonContent: string;
}

const FormButton: React.FC<ButtonProps> = ({ buttonContent }) => {
    return (
        <button className="form-button">
            <svg width="130px" height="60px" viewBox="0 0 130 60" className="border">
                <polyline points="49,1 49,49 1,49 1,1 49,1" className="bg-line" />
                <polyline points="49,1 49,49 1,49 1,1 49,1" className="hl-line" />
            </svg>
            {buttonContent}
        </button>
    );
}

export default FormButton;
