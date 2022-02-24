import React, { Component, useCallback, useMemo } from 'react';
import RaidDataTable from './RaidDataTable';
import axios from "axios";
import '../table.css'

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCollection: [],
            spritesCollection: [],
            index: 0
        };
    }


    async componentDidMount() {

        var options = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/raid_exclusive_pokemon.json',
            headers: {
                'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
                'x-rapidapi-key': 'cb11f2ee2fmsha08fecdbc24fd3cp11b47bjsn82e3b7599a4d'
            }
        };

        await axios.request(options).then((response) => {
            this.setState({ dataCollection: Object.values(response.data) })

        }).catch(function (error) {
            console.error(error);
        });


        for (var i = 0; i < this.state.dataCollection.length; i++) {
            this.setState({index: this.state.dataCollection[i].id})
            var tempOptions = {
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${this.state.index}`,
            };
            await axios.request(tempOptions).then((response) => {
                this.setState({ spritesCollection: this.state.spritesCollection.concat(response.data.sprites.front_default) })
            }).catch(function (error) {
                console.error(error);
            });
        }
        for (var i = 0; i < this.state.dataCollection.length; i++) {
            this.state.dataCollection[i].sprites = this.state.spritesCollection[i]
        }
    }



    dataTable() {

        return this.state.dataCollection.map((data, i) => {
            return <RaidDataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <table className="table-table">
                <thead className="table-th">
                    <tr className="table-row">
                        <th>Pokedex</th>
                        <th></th>
                        <th>Pokemon</th>
                        <th>Raid Level</th>
                    </tr>
                </thead>
                <tbody>
                    {this.dataTable()}
                </tbody>
            </table>
        )
    }

}
