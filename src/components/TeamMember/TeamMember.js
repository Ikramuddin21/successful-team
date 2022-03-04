import React from 'react';
import './TeamMember.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const TeamMember = (props) => {

    const { name, age, company, email, img, salary } = props.member;
    const { handleAddMember } = props;

    return (
        <div className='teamMember'>
            <div className='image-area'>
                <img src={img} alt="" />
            </div>
            <div>
                <p><span>Name:</span> {name}</p>
                <p><span>Company:</span> {company}</p>
                <p><span>Age:</span> {age}</p>
                <p><span>Email:</span> {email}</p>
                <p><span>Salary:</span> ${salary}</p>
                <button
                    className="add-btn"
                    onClick={() => handleAddMember(props.member)}
                ><FontAwesomeIcon icon={faUserPlus} /> Add User</button>
            </div>
        </div>
    );
};

export default TeamMember;