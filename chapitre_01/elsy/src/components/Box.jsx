import React from 'react'

class Box extends React.Component {

    render() {

        // console.log("this.props", this.props);

        const { 
            icon,
            color,
            value,
            unit,
            min,
            max,
            onChange 
        } = this.props

        let inputRange = null

        if (unit !== "L") {
            inputRange = (
                <input type="range"
                    min={min}
                    max={max}
                    value={value}
                    onInput={onChange} />
            )
        }

        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{ fontSize: 100, color: color }}>
                    {icon}
                </span>
                <p>{value} {unit}</p>
                {inputRange}
            </div>
        )
    }
}

export default Box