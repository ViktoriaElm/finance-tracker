{/* компонент для отображения одной транзакции (показывать описание, сумму, категорию) */ }

import "./TransactionItem.css";
import ActionPopup from "../popups/ActionPopup.tsx";

export default function TransactionItem() {
    return (

        <>
            <li className="plan-fact-finace-information-item">

                <div className="plan-fact-finace-information-input-box">
                    <input
                        type="checkbox"
                        id="checkbox"
                        className="plan-fact-finace-information-input"
                    />
                </div>

                <div className="plan-fact-finace-information-ammoun-wrapper">
                    <p className="plan-fact-finace-information-ammount">
                        12 000 <span className="plan-fact-finace-information-currency">rub</span>
                    </p>

                    {/* <p>-</p> */}

                    <p className="plan-fact-finace-information-description">
                        Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text Here will be text text-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-aligntext-align
                    </p>
                </div>

                <p className="plan-fact-finace-information-category">
                    sports
                </p>

                <p className="plan-fact-finace-information-actions">
                    <span>…</span>
                </p>

                <ActionPopup />

            </li>
        </>

    );
}
