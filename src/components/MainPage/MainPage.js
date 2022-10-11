import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage () {

    const [users, setUsers] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((users) => {
            setUsers(users);
            setIsLoading(false);
          });
      }, []);

    return (
        <div className="main-page-main-container">
            <ToastContainer />
            <div className="main-page-wrapper">
                <div className={isLoading ? "main-page-category-container skeleton" : 'main-page-category-container'}>
                </div>
                <div className="main-page-content-container">
                    <div className={isLoading ? "main-page-featured-container skeleton" : "main-page-featured-container"}>
                    </div>
                    <div className="main-page-list-content-container">
                        {isLoading && Array(9).fill(0).map((_) => <div className="main-page-content-list-element skeleton"></div>)}
                        {users.map((user, i) => {
                            return <div key={i} className="main-page-content-list-element">
                                {user.name}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage