import './App.css'

function App() {

  return (
    <>
      <header className="header">
        <h1>Finance tracker</h1>
      </header>

      <main className="finance-information">

        {/* компонент для отображения текущего баланса */}
        {/* <Balance/> */}

        {/* форма с полями: "Описание" (текст), "Сумма" (число), "Тип" (выпадающий список "Доход"/"Расход"), "Категория" (выпадающий список, например, "Еда", "Транспорт", "Зарплата") */}
        {/* <TransactionForm/> */}

        {/* компонент для отображения списка транзакций */}
        {/* <TransactionList/> */}

        {/* компонент для отображения одной транзакции (показывать описание, сумму, категорию) */}
        {/* <TransactionItem/> */}
      </main>

      <footer className="footer"></footer>
    </>
  )
}

export default App
