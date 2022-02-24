import React, { Component } from 'react';

class RaidDataTable extends Component {

    render() {
        return (
            
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    <img src={this.props.obj.sprites}/>
                </td>  
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.raid_level}
                </td>
            </tr>
        );
    }
}

export default RaidDataTable;