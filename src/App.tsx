import { useState } from 'react';
import { Transaction, transactions } from './data/index';
import './App.css';
import MainTable from './components/MainTable';
import FilterComponent from './components/FilterComponent';
import AddComponent from './components/AddComponent';
import SummaryComponent from './components/SummaryComponent';
import DetailsViewComponent from './components/DetailsViewComponent';
import { TransactionsProvider } from './context/context';


function App() {
  const [data] = useState<Transaction[]>(transactions);

  return (
    <TransactionsProvider val={data}>
    <div className='app'>
      <div className='header'>
      <span className="material-symbols-outlined icon">
        currency_exchange
      </span>
        <h1>Personal Finance Tracker</h1>
      </div>
      <div className='body'>
          <div className='tableHeader'>
            <div className='appComponent' title="Add new transaction"><AddComponent /></div>
            <div className='transactions'><p>Transactions</p></div>
            <div className='filterSumarry'>
              <FilterComponent title="Filter transactions by category" />
              <SummaryComponent title="Summary of transactions" data={[]}/> 
            </div>
          </div>
          <div>
            <MainTable />
          </div>
          <DetailsViewComponent />
      </div>
    </div>
    </TransactionsProvider>
  );
}

export default App;
