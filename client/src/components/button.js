import React from "react";

export default class Button extends React.Component {
    //     const [, updateState] = React.useState();
    //     const forceUpdate = React.useCallback(() => updateState({}), []);

    //     console.log("rendering...");

    //     return (
    //         <div className="App">
    //             <h1>Time to force some updates</h1>
    //             <button onClick={forceUpdate}>Force re-render</button>
    //         </div>
    //     );
    // }

    handleClick = () => {
        // force a re-render
        this.forceUpdate();
    };

    render() {
        console.log('App component: render()')
        return (
            <>
                <button onClick={this.handleClick}>Render</button>
            </>
        );
    }
}
