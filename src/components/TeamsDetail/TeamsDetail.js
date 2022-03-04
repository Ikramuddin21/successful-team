import React, { useEffect, useState } from 'react';
import AddedMember from '../AddedMember/AddedMember';
import TeamMember from '../TeamMember/TeamMember';
import './TeamDetails.css';

const TeamsDetail = () => {

    const [members, setMembers] = useState([]);
    const [addMember, setAddMember] = useState([]);

    // data load
    useEffect( () => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setMembers(data))
    }, []);

    // add member handle
    const handleAddMember = member => {
        const newMember = [...addMember, member];
        setAddMember(newMember);
    };

    return (
        <div className='teamDetails-container'>
            {/* TeamMember presentational component */}
            <div className="teamMember-container">
                {
                    members.map(member => <TeamMember
                        key={member.id}
                        member={member}
                        handleAddMember={handleAddMember}
                    />)
                }
            </div>

            {/* AddedMember presentational component */}
            <div className="addedMember-container">
                <AddedMember addMember={addMember} />
            </div>
        </div>
    );
};

export default TeamsDetail;