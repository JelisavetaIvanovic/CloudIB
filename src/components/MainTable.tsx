import Table from './Table';
import { useTransactionsContext } from '../context/context';

const MainTable = () => {
    const { data } = useTransactionsContext();
    
    return (
        <div>
            <Table headerArray={['Category', 'Description', 'Amount']} bodyArray={data} />
        </div>
    )
};

export default MainTable;