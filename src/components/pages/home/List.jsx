import React, { useState } from "react";
// import { getData } from "../../../services/filesService";

export default function List (data) {

    return(
        <>
            <table className="table table-striped bg-color-light">
                <thead>
                <tr>
                    <th className={'bg-dark text-white'}>Nom</th>
                    <th className={'bg-dark text-white'}>Catégories</th>
                    <th className={'bg-dark text-white'}>Type</th>
                    <th className={'bg-dark text-white'}>Tailles</th>
                    <th className={'bg-dark text-white text-center'}>Actions</th>
                </tr>
                </thead>

                <tbody>
                {
                    data.data.map(
                        (file, key) => (
                            <tr key={key} className={"small hover-bg-color"}>
                                <td>{file.name}</td>
                                <td>{file.category}</td>
                                <td>{file.type}</td>
                                <td>{file.size} Mo</td>
                                <td className={"text-center"}>
                                    <a href={file.url} download>
                                        <i className="fas fa-download ml-1 text-success cursor-pointer"></i>
                                    </a>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
} 