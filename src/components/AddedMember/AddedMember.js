import React from 'react';
import './AddedMember.css';

const AddedMember = ({ addMember }) => {

    const total = addMember.reduce((prev, member) => prev + member.salary, 0);

    return (
        <div className='addedMember'>
            <h3>Added Member: {addMember.length}</h3>
            <h3>Total Cost: {total}</h3>
            {/* clicked member name & image */}
                {
                    addMember.map(memberName => <div
                        className='memberInfo' 
                        key={memberName.id}>
                        <img src={memberName.img} alt="" />
                        <span>{memberName.name}</span>
                    </div>)
                }
        </div>
    );
};

export default AddedMember;