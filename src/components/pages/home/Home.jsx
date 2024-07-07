// react imports
import React, { useState, useEffect } from "react";
// local imports
import List from "./List";
// data imports
import { filesData } from "../../../data/files";
// import { getData} from "../../../services/filesService";

export default function Home () {
    const [data, setData] = useState([])


    // fetch data
    useEffect(() => {
        // si il n'y a pas de service (api) pour recuperer les donnees
        setData(filesData)

        // decommenter s'il y a un service (api) pour recuperer les donnees
        // getData()
        //     .then((response) => {
        //         const data = response.data.data
        //         setData(data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }, [])

    let list =
        <>
            <div className={"row mt-2"}>
                <div className={"col-1"}>
                    <button className={"btn btn-primary btn-sm"}
                    >
                        <i className={"fas fa-plus"}></i> Ajouter
                    </button>
                </div>
            </div>

            <div className={"row mt-2"}>
                <div className={"col-12"}>
                    <List data={data} />
                </div>
            </div>
        </>

    return (list)
}