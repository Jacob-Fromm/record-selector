import React, {useState} from 'react'
import _ from 'lodash'

export default function RecordSelector(props) {
    const records = props.records
    let randomRecordObj = _.sample(records)
    const [currentRecord, setCurrentRecord] = useState(randomRecordObj)
    const [clickStatus, setClickStatus] = useState(true)

    const clickHandler = () => {
        setCurrentRecord(_.sample(records))
        setClickStatus(!clickStatus)
    }
    console.log("random record", randomRecordObj)
    console.log("click status", clickStatus)
    return(
        <div className="records-container">
            <h3>Today you should listen to...</h3>
            <h4 className={clickStatus ? "slide-in" : "slide-out"}><em>{currentRecord.name}</em> by {currentRecord.artist}</h4>
            <p id="selection-button" onClick={clickHandler}>click for a different record</p>
        </div>
    )
}