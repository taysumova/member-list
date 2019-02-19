import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <h3>Участники:</h3>
    );
}

const MembersList = props => {
    const rows = props.membersData.map((row, index) => {
        return (
            <article key={index} className="member">
                <h4>{row.memberName}</h4>
                <p>{row.eventCity}</p>
                <span className="number">{row.memberPhone}</span>
                <div className="btn-wrapper">
                    {/*<button onClick={() => props.editMemberInfo(index)} className="edit-btn">&#128393;</button>*/}
                    <button onClick={() => props.removeMember(index)} className="delete-btn">&#128500;
                    </button>
                </div>
            </article>
        );
    });


    return <div>{rows}</div>;
}

class Table extends Component {
    render() {
        const {membersData, editMemberInfo, removeMember} = this.props;

        return (
            <section>
                <TableHeader/>
                <MembersList membersData={membersData} editMemberInfo={editMemberInfo} removeMember={removeMember}/>
            </section>
        );
    }
}

export default Table;
