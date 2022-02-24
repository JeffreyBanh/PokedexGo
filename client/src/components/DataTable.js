import React, { Component } from 'react';

class DataTable extends Component {

    render() {
        return (
            
            <tr>
                <td>
                    {this.props.obj.pokemon_id}
                </td>
                <td>
                    <img src={this.props.obj.sprites}/>
                    {/* <img src={this.props.obj.sprites} /> */}
                </td>   
                <td>
                    {this.props.obj.pokemon_name}
                </td>
                <td>
                    {this.props.obj.base_attack}
                </td>
                <td>
                    {this.props.obj.base_defense}
                </td>
                <td>
                    {this.props.obj.base_stamina}
                </td>
                <td>
                    {this.props.obj.max_cp}
                </td>
            </tr>
        );
    }
}

export default DataTable;