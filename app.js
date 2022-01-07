class MainContainer extends React.Component {
    render() {
        return(
            <div className="item">
            <div className="left-container">
                <div className="left-items">
                    <span>Dashboard</span>
                    <span>Widget</span>
                    <span>Reviews</span>
                    <span>Customers</span>
                    <span>Online Analysis</span>
                    <span>Settings</span>
              </div>
              </div>

            <div className="top-item-1">
                <h3>Reviews</h3>
                <h2>1,281</h2>
            </div>

            <div className="top-item-2">
                <h3>Average Ratings</h3>
                <h2>4.6</h2>
            </div>

            <div className="top-item-3">
                <h3>Sentiment Analysis</h3>
                <div className="item-3-content">
                <h2>960</h2>
                <h2>122</h2>
                <h2>321</h2>
                </div>
            </div>

            <div className="bottom-container">
                <h3>Website Visitors</h3>
                <h2>821</h2>
                <div className="bottom-items"></div>
            </div>

            </div>
        // closes main div
        )
        }
}

class App extends React.Component {
    render() {
        return (
            <MainContainer />
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main-container')
);


