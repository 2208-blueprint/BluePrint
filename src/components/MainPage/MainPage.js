import React from "react";

function MainPage () {

    const nums = ['1','2','3','4','5','6','7','8','9', '10', '11', '12']

    return (
        <div className="main-page-main-container">
            <div className="main-page-wrapper">
                <div className="main-page-category-container">
                Categories
                </div>
                <div className="main-page-content-container">
                    <div className="main-page-featured-container">
                        Featured component
                    </div>
                    <div className="main-page-list-content-container">
                        {nums.map((num, i) => {
                            return <div key={i} className="main-page-content-list-element">
                                {num}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage