import React from 'react';
import { SparklinesBars, Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
    function average(data) {
        return _.round(_.sum(data)/(data.length));
    }

    return (
        <div>
            <Sparklines svgHeight={150} svgWidth={300} data={props.data} >
              <SparklinesBars style={{ fill: props.color }} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}