{/*    форма с полями:
    "Описание" (текст),
    "Сумма" (число),
    "Тип" (выпадающий список "Доход"/"Расход")    */ }

import "./TransactionForm.css";
import FormButton from "../buttons/FormButton";

export default function TransactionForm() {
    return (
        <form className="finance-form">

            {/* "Сумма" (число) */}
            <input
                className="amount-input"
                type="text"
                placeholder="planned amount" />

            {/* "Описание" (текст) */}
            <input
                className="description-input"
                type="text"
                placeholder="description of planned costs" />

            {/* "Тип" (выпадающий список "Доход"/"Расход") */}

            {/* "Категория" (выпадающий список, например, "Еда", "Транспорт", "Зарплата") */}
            <select
                className="category-select">
                <option value="">
                    Choose category
                </option>
                <option
                    className="category-selected-option"
                    value="food">Food</option>
                <option
                    className="category-selected-option"
                    value="transport">Transport</option>
                <option
                    className="category-selected-option"
                    value="sports">Sports</option>
            </select>

            <div className="buttons-container">
                <FormButton buttonContent={"+"} />
                <FormButton buttonContent={"-"}
                />
            </div>
        </form>
    );
}
