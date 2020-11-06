import React, { useEffect } from 'react'
import c3 from 'c3'

const BarChart = () => {
  useEffect(() => {
    c3.generate({
      bindto: '#bar_chart',
      // size: {
      //   height: 400,
      //   width: 400
      // },
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],

        ],
        type: 'bar',
      },
      bar: {
        width: {
          ratio: 0.5, // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
      },
      grid: {
        focus: {
          show: true,
        },
        x: {
          show: false,
        },
        y: {
          show: true,
        },
      },
    })
  }, [])

  return <div id='bar_chart' className='analitics_chart' />
}

export default BarChart
