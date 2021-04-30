import React from 'react'
import _ from 'lodash'

export default function RecordSelector(props) {
    const records = props.records
    var randomRecordObj = _.sample(records)
    // console.log ("random record", randomRecordObj)

    var randomRecord = props.records[0];
    console.log("random record", randomRecordObj)
    return(
        <div className="records-container">
            <h3>Today you should listen to...</h3>
            <h4><em>{randomRecordObj.name}</em> by {randomRecordObj.artist}</h4>
        </div>
    )
}