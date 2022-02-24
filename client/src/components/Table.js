import React, { Component, useCallback, useMemo } from 'react';
import DataTable from './DataTable';
import axios from "axios";
import './table.css'

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersCollection: [],
            myArray: [],
            spiritesArray: [],
            maxCPArray: [],
            dataCollection: [],
            index: 0,
            string: "",

        };
    }


    async componentDidMount() {

        const options = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json',
            headers: {
                'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
                'x-rapidapi-key': 'cb11f2ee2fmsha08fecdbc24fd3cp11b47bjsn82e3b7599a4d'
            }
        };

        const options2 = {
            method: 'GET',
            url: 'https://pokemon-go1.p.rapidapi.com/pokemon_max_cp.json',
            headers: {
                'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
                'x-rapidapi-key': 'cb11f2ee2fmsha08fecdbc24fd3cp11b47bjsn82e3b7599a4d'
            }
        };

        // const axiosrequest1 = axios.get('https://pokemon-go1.p.rapidapi.com/pokemon_stats.json')
        // const axiosrequest2 = axios.get('https://pokemon-go1.p.rapidapi.com/pokemon_max_cp.json')
        // const axiosrequest3 = axios.get('https://pokeapi.co/api/v2/pokemon/1')

        // await axios.all([axiosrequest1, axiosrequest2, axiosrequest3]).then(axios.spread((...response) => {
        //     const response1 = response[0]
        //     const response2 = response[1]
        //     const response3 = response[2]
        //     // this.setState({ usersCollection: this.state.usersCollection.concat(response.data[0]) })
        //     for (var i = 0; i < 25; i++) {
        //         if (response1.data[i].form == "Normal") {
        //             this.setState({ usersCollection: this.state.usersCollection.concat(response1.data[i]) })
        //             this.setState({ maxCPArray: this.state.maxCPArray.concat(response2.data[i]) })
        //             this.setState({ dataCollection: this.state.dataCollection.concat(response1.data[i]) })
        //         }
        //     }

        //     for (var i = 0; i < 25; i++) {
        //         if (response1.data[i].form == "Normal") {
        //             this.state.dataCollection[i].max_cp = this.state.maxCPArray.maxCP
        //         }
        //     }
        //     // for (var i = 1; i <= 25; i++) {
        //     //     if (this.state.usersCollection[i - 1].form == "Normal") {
        //     //         this.setState({ myArray: this.state.myArray.concat(this.state.usersCollection[i - 1]) })
        //     //     }

        //     // }


        //     // for (var i = 0; i < this.state.myArray.length; i++) {
        //     //     this.state.myArray[i].max_cp = this.state.maxCPArray[i].max_cp
        //     // }

        //     console.log(this.state.dataCollection)
        //     // for (var i = 1; i < this.state.usersCollection.length + 1; i++) {
        //     //     var tempOptions = {
        //     //         method: 'GET',
        //     //         url: `https://pokeapi.co/api/v2/pokemon/${i}`,
        //     //     };
        //     //     axios.request(tempOptions).then((response) => {
        //     //         this.setState({ spiritesArray: this.state.spiritesArray.concat(response.data.sprites.front_default) })
        //     //     })
        //     // }
        //     // console.log(this.state.spiritesArray)
        //     // console.log(this.state.myArray)
        // }))

        await axios.request(options).then((response) => {
            const data = response.data
            for (var i = 1; i < 450; i++) {
                this.setState({ usersCollection: this.state.usersCollection.concat((data[i])) })
            }
        })
        for (var i = 1; i < this.state.usersCollection.length + 1; i++) {
            var tempOptions = {
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${i}`,
            };
            await axios.request(tempOptions).then((response) => {
                this.setState({ spiritesArray: this.state.spiritesArray.concat(response.data.sprites.front_default) })
            }).catch(function (error) {
                console.error(error);
            });
        }

        for (var i = 1; i < 450; i++) {
            if (this.state.usersCollection[i -1].form == "Normal") {
                this.setState({ myArray: this.state.myArray.concat(this.state.usersCollection[i - 1]) })
            }
        }

        await axios.request(options2).then((response) => {
            var data2 = response.data
            console.log(data2)
            for (var i = 1; i < 450; i++) {
                if (data2[i-1].form == "Normal") {
                this.setState({ maxCPArray: this.state.maxCPArray.concat((data2[i-1].max_cp)) })
                }
            }
        }).catch(function (error) {
            console.error(error);
        });

        console.log(this.state.maxCPArray)

        for (var i = 0; i < this.state.myArray.length; i++) {
            this.state.myArray[i].sprites = this.state.spiritesArray[i]
            this.state.myArray[i].max_cp = this.state.maxCPArray[i]
        }
        
        console.log(this.state.myArray)
    }


    dataTable() {

        return this.state.myArray.map((data, i) => {
            return <DataTable obj={data} key={i} />;
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
                        <th className="Attack">Attack</th>
                        <th className="Defense">Defense</th>
                        <th className="Stamina">Stamina</th>
                        <th>Max CP</th>
                    </tr>
                </thead>
                <tbody>
                    {this.dataTable()}
                </tbody>
            </table>
        )
    }

}
