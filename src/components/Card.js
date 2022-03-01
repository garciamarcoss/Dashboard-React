import React from "react";

export default function Card(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body card-categories">
                    {props.name} {7}
                </div>
            </div>
        </div>
    )
}