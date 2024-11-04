import { useState } from 'react';
import { Transaction, transactions } from './data/index';
import './App.css';
import MainTable from './components/MainTable';
import FilterByCategoryComponent from './components/FilterByCategoryComponent';
import AddComponent from './components/AddComponent';
import SummaryComponent from './components/SummaryComponent';
import DetailsViewComponent from './components/DetailsViewComponent';
import { TransactionsProvider } from './context/context';
import FilterByDateComponent from './components/FilterByDateComponent';


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
            <div className='leftSide'>
              <div className='addComponent' title="Add new transaction"><AddComponent /></div>
              <SummaryComponent title="Summary of transactions" data={[]}/> 
            </div>
            <div className='transactions'><p>Transactions</p></div>
            <div className='rightSide'>
              <FilterByCategoryComponent title="Filter transactions by category" />
              <FilterByDateComponent title="Filter transactions by date" />
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
