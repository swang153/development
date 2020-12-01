import React, { Component } from 'react'

// This class contains the filtering and sorting selectors and calls on the props to pass in the
// filter/sort that the user selected.
export default class Filter extends Component {
    render() {
        return (
            // price sorting
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                 💸 Order by Price{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="off">off</option>
                        <option value="highest">highest to lowest</option>
                        <option value="lowest">lowest to highest</option>
                    </select>
                    
                </div>

                <div className="filter-era">
                    💟 Era {" "}
                    <select value={this.props.era} onChange={this.props.filterEras}>
                        <option value="">all</option>
                        <option value="positions">positions</option>
                        <option value="tun">tun</option>
                        <option value="sweetener">sweetener</option>
                    </select>
    
                </div>

                <div className="filter-merch">
                    🦋 Type of merch {" "}
                    <select value={this.props.merch} onChange={this.props.filterMerch}>
                        <option value="">all</option>
                        <option value="music">music</option>
                        <option value="clothes">clothes</option>
                        <option value="accessories">accessories</option>
                    </select>
    
                </div>

                
            </div>
        )
    }
}
