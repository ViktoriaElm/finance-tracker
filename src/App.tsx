import './App.css';
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import TransactionForm from "../components/forms/TransactionForm.tsx";


export default function App() {

  return (
    <>

      <Header />

      <main className="main-container">

        <TransactionForm />

        <div className="finace-information">

        </div>

        {/* компонент для отображения текущего баланса */}
        {/* <Balance/> */}

        {/* форма с полями: "Описание" (текст), "Сумма" (число), "Тип" (выпадающий список "Доход"/"Расход"), "Категория" (выпадающий список, например, "Еда", "Транспорт", "Зарплата") */}
        {/* <TransactionForm/> */}

        {/* компонент для отображения списка транзакций */}
        {/* <TransactionList/> */}

        {/* компонент для отображения одной транзакции (показывать описание, сумму, категорию) */}
        {/* <TransactionItem/> */}
      </main>

      <Footer />

    </>
  )
}
