import { useTransactionsContext } from '../context/context';
import { TableProps } from '../data';

const Table: React.FC<TableProps> = ({ headerArray, bodyArray }) => {
  const { setDetailsViewId } = useTransactionsContext();

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ddd' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{position: 'sticky', zIndex: '10', top: '0', backgroundColor: '#f19999'}}>
          <tr>
            {headerArray.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyArray.map(({ id, category, description, amount }) => (
            <tr
              key={id}
              onClick={() => setDetailsViewId(id)}
              className="tr-hover"
            >
              <td>{category}</td>
              <td>{description}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
