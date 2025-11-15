import './App.css';
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import TransactionForm from "../components/forms/TransactionForm.tsx";
import TransactionItem from "../components/lists/TransactionItem.tsx";

export default function App() {

  return (
    <>

      <Header />

      <main className="main-container">

        <TransactionForm />

        <ul className="finace-information">
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </ul>

        {/* компонент для отображения текущего баланса */}
        {/* <Balance/> */}

        {/* компонент для отображения списка транзакций */}
        {/* <TransactionList/> */}

      </main>

      <Footer />

    </>
  )
}
