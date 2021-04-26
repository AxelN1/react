import React from 'react';


class List extends React.Component {
    render() {
        return (

            <div>
                <ul>
                    {this.props.items.map((elem) => {
                        return <li>{elem.name} - the price is: {elem.price}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default List