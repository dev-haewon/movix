import React, {useState } from 'react'

import "./style.scss"

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300);
    }

    return (
    <div className='SwitchingTabs'>
        <div className="tabItems">
            {data.map((tab, index) => (
                <span key={index} className={`tabItem`}>
                    {tab}
                </span>
            ))}
            <span className="movingBg" style={{ left }}></span>
        </div>
    </div>
    );
};

export default SwitchTabs