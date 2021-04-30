import React, {useState} from 'react'
import _ from 'lodash'

export default function RecordSelector(props) {
    const records = props.records
    let randomRecordObj = _.sample(records)
    const [currentRecord, setCurrentRecord] = useState(randomRecordObj)


    const clickHandler = () => {
        setCurrentRecord(_.sample(records))
        return currentRecord
    }
    console.log("random record", randomRecordObj)
    return(
        <div className="records-container">
            <h3>Today you should listen to...</h3>
            <h4><em>{currentRecord.name}</em> by {currentRecord.artist}</h4>
            <button id="selection-button" onClick={clickHandler}>click for a different record</button>
        </div>
    )
}