import "./ActionPopup.css"

interface ActionPopupProps {
    ActionPopupContent?: string;
}

const ActionPopup: React.FC<ActionPopupProps> = () => {
    return (

        // если нижний край, то не скрывать часть меню, а поднимать с пэддингом 10px
        <div className="action-popup">
            <p className="action-popup-edit">
                edit
                </p>
            <hr/>
            <p className="action-popup-delete">
                delete
                </p>
        </div>
    );
}

export default ActionPopup;
