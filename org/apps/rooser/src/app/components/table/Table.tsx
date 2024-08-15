import './table.css';

type tableProps = {
    headerText: string;
    data: any;
}

export const Table = ({ headerText, data }:tableProps) => {
    return (
        <div className="table-wrapper">
            <h2 className="table-header">{headerText}</h2>
            <table className="table">
            </table>
        </div>
    )
}