import './table.css';

type tableProps = {
    headerText: string;
    data: any;
}

export const Table = ({ headerText, data }:tableProps) => {
    return (
        <div className="table-wrapper rounded shadow">
            <h2 className="table-header collapsible open">{headerText}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className='hidden-text'>Item</th>
                        <th>Quality</th>
                        <th>Dispatch Date</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th className='hidden-text'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Item
                        </td>
                        <td>
                            A+
                        </td>
                        <td>
                            Today
                        </td>
                        <td>
                            60 x 5 kg
                        </td>
                        <td>
                            €8.65
                        </td>
                        <td>
                            <button>Accept</button>
                            <button>Ignore</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}